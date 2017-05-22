import { Observable } from 'rxjs/Observable';
import { ProjectsService } from './../projects.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers:  [ ProjectsService ]
})
export class ListComponent implements OnInit, OnDestroy {
  projects: Observable<any[]>;
  issuesSubscriber: Subscription;
  formSubscriber: Subscription;
  errorMessage: string;
  selectedProject: any;
  searchForm: FormGroup;
  private projectDetails: any[];

  constructor(private service: ProjectsService, private fb: FormBuilder, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.getProjects();
    this.searchForm = this.fb.group({
      fork: [true],
      owner: [true]
    });

    this.formSubscriber = this.searchForm.valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe( data => this.getProjects(),
        error =>  this.errorMessage = <any>error
        );
  }

  ngOnDestroy() {
    if (this.issuesSubscriber) {
      this.issuesSubscriber.unsubscribe();
    }
    if (this.formSubscriber) {
      this.formSubscriber.unsubscribe();
    }
  }

  open(project) {
    // console.log(project);
    // this.projectDetails = this.service.getProjectIssues(project.name)
     this.issuesSubscriber = this.service.getProjectIssues(project.name)
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
          let u: any[] = [];
          for (const i of p) {
            if ( (!!i.fork && !!fork && !own) || (!i.fork && !fork && !!own) || (!!fork && !!own) ) {
              u.push(i);
            }
          }
          //console.log('getProjects', u);
          return u;
        })
        .catch( (error, caught) => {
          //console.log(error, caught);
          const data = JSON.parse(error._body);
          this.snackBar.open(data.message, 'Close');
          return Observable.of([]);
        })
        // .subscribe(
        //     projects => this.projects = projects,
        //     error =>  this.errorMessage = <any>error)
        ;
      return this.projects;
  }

  selectProject(project) { this.selectedProject = project; }

}

export interface SearchForm {
  fork: boolean;
  owner: boolean;
}
