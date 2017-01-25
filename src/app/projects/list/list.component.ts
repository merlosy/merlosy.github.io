import { ProjectsService } from './../projects.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:  [ ProjectsService ]
})
export class ListComponent implements OnInit {
  projects: any[] = [];
  errorMessage: string;
  selectedProject: any;
  searchForm: FormGroup;

  constructor(private service: ProjectsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getProjects();
    this.searchForm = this.fb.group({
      fork: [true],
      owner: [true]
    });

    this.searchForm.valueChanges.subscribe( data => this.getProjects() );
  }

  onSubmit({ value, valid }: { value: SearchForm, valid: boolean }) {
    console.log(value, valid);
  }

  getProjects(){
    this.service.getProjects()
        .map(p => {
          const fork = this.searchForm.get('fork').value;
          const own = this.searchForm.get('owner').value;
          let u : any[] = [];
          for (const i of p) {
            if ( (!!i.fork && !!fork && !own) || (!i.fork && !fork && !!own) || (!!fork && !!own) ) {
              u.push(i);
            }
          }
          // console.log(p, u, fork, own);
          return u;
        })
        .subscribe(
            projects => this.projects = projects,
            error =>  this.errorMessage = <any>error)
        ;
  }

  selectProject(project) { this.selectedProject = project; }

}

export interface SearchForm {
  fork: boolean;
  owner: boolean;
}
