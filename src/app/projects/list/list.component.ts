import { ProjectsService } from './../projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:  [ ProjectsService ]
})
export class ListComponent implements OnInit {
  projects: any[];
  errorMessage: string;
  selectedProject: any;

  constructor(private service: ProjectsService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(){
    this.service.getProjects()
                .subscribe(
                       projects => this.projects = projects,
                       error =>  this.errorMessage = <any>error);
  }

  selectProject(project) { this.selectedProject = project; }

}
