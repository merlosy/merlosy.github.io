import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() project: any;

  constructor(private dialog: MdDialog, private viewContainerRef: ViewContainerRef) {
    this.project = {};
  }

  ngOnInit() {
  }

  onDetails(): void {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
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
