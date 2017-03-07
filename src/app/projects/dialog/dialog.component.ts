import { ProjectsService } from './../projects.service';
import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  private project: any;

  constructor(public dialogRef: MdDialogRef<DialogComponent>, private service: ProjectsService) {
    this.project = this.dialogRef.config.data;
  }

  ngOnInit() {
    this.service.getProjectDetails(this.project.name)
      .subscribe( p => this.project = p );
  }

}
