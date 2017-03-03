import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() project: any;

  constructor(public dialog: MdDialog) {
    this.project = {};
  }

  ngOnInit() {
  }

  onDetails(): void {
    const config = new MdDialogConfig();
    config.data = {
      id: this.project.id,
      name: this.project.name,
      url: this.project.url,
    };
    config.width = '600px';
    const dialogRef = this.dialog.open(DialogComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      const selectedOption = result;
      console.log(selectedOption);
    });
  }

}
