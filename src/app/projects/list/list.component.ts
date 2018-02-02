import { Observable } from 'rxjs/Observable';
import { ProjectsService } from './../projects.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, tap, take, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Subscription } from 'rxjs/Subscription';
import { MatSnackBar } from '@angular/material';

export interface SearchForm {
  fork: boolean;
  owner: boolean;
}

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

  constructor(private service: ProjectsService, private fb: FormBuilder, public snackBar: MatSnackBar) { }

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
    this.service.getProjectIssues(project.name).pipe(
      tap(u => console.log(u) ),
      take(1)
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
          //console.log('getProjects', u);
          return u;
        }),
        catchError( (error, caught) => {
          //console.log(error, caught);
          const data = JSON.parse(error._body);
          this.snackBar.open(data.message, 'Close');
          return of([]);
        })
      );
      return this.projects;
  }

  selectProject(project) { this.selectedProject = project; }

}
