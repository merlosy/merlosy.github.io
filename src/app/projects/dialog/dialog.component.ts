import { ProjectsService } from './../projects.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  private project: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: ProjectsService) {
    this.project = data.project;
  }

  ngOnInit() {
  }

}
