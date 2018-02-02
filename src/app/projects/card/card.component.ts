import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input() project: any;

  constructor(private dialog: MatDialog) {
    this.project = {};
  }

  ngOnInit() {
  }

  onDetails(): void {
    const config = new MatDialogConfig();
    config.data = { project: this.project };
    config.width = '600px';
    const dialogRef = this.dialog.open(DialogComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      const selectedOption = result;
      console.log(selectedOption);
    });
  }

}
