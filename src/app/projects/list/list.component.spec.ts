import { MockBackend } from '@angular/http/testing';
import { Http, ConnectionBackend, RequestOptions, BaseRequestOptions } from '@angular/http';
import { ProjectsModule } from './../projects.module';
import { ProjectsService } from './../projects.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './../card/card.component';
import { MaterialModule } from '@angular/material';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  // let projectsService: ProjectsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent,
        CardComponent
      ],
      imports: [
        MaterialModule,
        ReactiveFormsModule
      ],
      providers: [
        ProjectsService,
        Http,
        {provide: ConnectionBackend, useClass: MockBackend},
        {provide: RequestOptions, useClass: BaseRequestOptions}
      ]
    })
    .compileComponents();
  }));

  beforeEach(inject([ProjectsService], _service => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    // projectsService = _service;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch list of project onInit', () => {
    spyOn(component, 'getProjects');
    fixture.detectChanges();
    expect(component.getProjects).toHaveBeenCalledTimes(1);
  });

  it('should fetch list of project after editing form', () => {
    spyOn(component, 'getProjects');
    fixture.detectChanges();
    component.searchForm.get('fork').setValue(false);
    fixture.detectChanges();
    expect(component.getProjects).toHaveBeenCalledTimes(1);
  });

  /**
   * Cannot test private methods
   */
  // it('should compute data while getProject', async(() => {
  //   fixture.detectChanges();
  //   spyOn(projectsService, 'getProjects').and.returnValues([
  //     {id: 1, fork: true, own: false}
  //   ]);
  //   component.getProjects().subscribe( p => {
  //     expect(p).toBeTruthy();
  //     expect(p[0].id).toEqual(1);
  //   });
  // }));

  it('should change selected project, on select', () => {
    fixture.detectChanges();
    component.selectedProject = {id: 2};
    component.selectProject({id: 3});
    expect(component.selectedProject).toEqual({id: 3});
  });

});
