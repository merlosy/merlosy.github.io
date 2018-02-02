import { ProjectsService } from './../projects.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  private project: any;

  constructor(@Inject(MD_DIALOG_DATA) public data: any, private service: ProjectsService) {
    this.project = data;
  }

  ngOnInit() {
    this.service.getProjectDetails(this.project.name)
      .subscribe( p => this.project = p );
  }

}
