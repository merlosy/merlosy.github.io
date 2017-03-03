import { MockBackend } from '@angular/http/testing';
import { Http, ConnectionBackend, RequestOptions, BaseRequestOptions } from '@angular/http';
import { ProjectsService } from './../projects.service';
import { MdDialogModule, MdDialogRef, MdDialog, MdDialogActions } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [DialogComponent],
    entryComponents: [DialogComponent],
    exports: [DialogComponent],
})
class MdDialogModuleMock { }

describe('DialogComponent', () => {
  let component: DialogComponent;
  // let fixture: ComponentFixture<DialogComponent>;
  let dialog: MdDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ProjectsService,
        Http,
        {provide: ConnectionBackend, useClass: MockBackend},
        {provide: RequestOptions, useClass: BaseRequestOptions}
      ],
      imports: [
        MdDialogModuleMock,
        MdDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MdDialog);
    let dialogRef = dialog.open(DialogComponent);
    component = dialogRef.componentInstance;
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
