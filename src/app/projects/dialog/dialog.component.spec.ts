import { MockBackend } from '@angular/http/testing';
import { CommonModule } from '@angular/common';
import { Http, ConnectionBackend, RequestOptions, BaseRequestOptions } from '@angular/http';
import { ProjectsService } from './../projects.service';
import { MdDialogModule, MdDialogRef, MdDialog, MdDialogActions, MaterialModule, MdDialogConfig } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [DialogComponent],
    entryComponents: [DialogComponent],
    exports: [DialogComponent],
    imports: [ CommonModule, MaterialModule ]
})
class MdDialogModuleMock { }

class MdDialogRefMock {
  public data: any = {};
}
describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let dialog: MdDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ProjectsService,
        Http,
        {provide: ConnectionBackend, useClass: MockBackend},
        {provide: RequestOptions, useClass: BaseRequestOptions},
        {provide: MdDialogRef, useClass: MdDialogRefMock}
      ],
      imports: [
        MaterialModule,
        MdDialogModuleMock,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MdDialog);
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    config.data = {
      id: 1,
      name: 'test',
      url: 'http://google.fr',
    };
    config.width = '600px';
    let dialogRef = dialog.open(DialogComponent, config);
    component = dialogRef.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should init component', () => {
  //   fixture = TestBed.createComponent(DialogComponent);
  //   fixture.detectChanges();
  //   expect(component).toBeTruthy();
  // });

});
