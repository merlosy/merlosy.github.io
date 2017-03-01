import { Observable } from 'rxjs/Observable';
import { ProjectsService } from './../projects.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    this.getProjects();
    this.searchForm = this.fb.group({
      fork: [true],
      owner: [true]
    });

    this.searchForm.valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe( data => this.getProjects(),
        error =>  this.errorMessage = <any>error
        );
  }

  onSubmit({ value, valid }: { value: SearchForm, valid: boolean }) {
    console.log(value, valid);
  }

  open(project) {
    console.log(project);
    // this.projectDetails = this.service.getProjectIssues(project.name)
    this.service.getProjectIssues(project.name)
      .map(u => {console.log(u); return u; })
      .subscribe(
            p => this.projectDetails = p,
            error =>  this.errorMessage = <any>error);
  }

  getProjects() {
    this.projects = this.service.getProjects()
        .map(p => {
          const fork = this.searchForm.get('fork').value;
          const own = this.searchForm.get('owner').value;
          let u : any[] = [];
          for (const i of p) {
            if ( (!!i.fork && !!fork && !own) || (!i.fork && !fork && !!own) || (!!fork && !!own) ) {
              u.push(i);
            }
          }
          console.log('getProjects', u);
          return u;
        })
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