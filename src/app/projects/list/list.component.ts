import { Observable } from 'rxjs/Observable';
import { ProjectsService } from './../projects.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-project-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers:  [ ProjectsService ]
})
export class ListComponent implements OnInit {
  projects: Observable<any[]>;
  errorMessage: string;
  selectedProject: any;
  searchForm: FormGroup;
  private projectDetails: any[];

  constructor(private service: ProjectsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      fork: [true],
      owner: [true],
      sort: ['full_name'],
      type: ['owner']
    });
    this.getProjects('full_name', 'owner');

    this.searchForm.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged()
    )
      .subscribe( data => {
          console.log('data', data);
          return this.getProjects(data.sort, data.type);
        },
        error =>  this.errorMessage = <any>error
        );
  }

  onSubmit(form: FormGroup) {
    console.log(form.value, form.valid);
  }

  open(project) {
    console.log(project);
    // this.projectDetails = this.service.getProjectIssues(project.name)
    this.service.getProjectIssues(project.name).pipe(
      tap(u => console.log(u) )
    ).subscribe(
            p => this.projectDetails = p,
            error =>  this.errorMessage = <any>error);
  }

  getProjects(sort, type) {
    this.projects = this.service.getProjects(sort, type).pipe(
        map(p => {
          const fork = this.searchForm.get('fork').value;
          const own = this.searchForm.get('owner').value;
          const u: any[] = [];
          for (const i of p) {
            if ( (!!i.fork && !!fork && !own) || (!i.fork && !fork && !!own) || (!!fork && !!own) ) {
              u.push(i);
            }
          }
          console.log('getProjects', u);
          return u;
        })
      )
        // .subscribe(
        //     projects => this.projects = projects,
        //     error =>  this.errorMessage = <any>error)
        ;
  }

  selectProject(project) { this.selectedProject = project; }

}

export interface SearchForm {
  fork: boolean;
  owner: boolean;
}
