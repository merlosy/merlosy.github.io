import { SharedModule } from './../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '@angular/material';
import { PageHeaderComponent } from './../shared/page-header/page-header.component';
import { ListComponent } from './list/list.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import MockRouter from '../../test/MockRouter.spec';
import 'hammerjs';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectsComponent,
        ListComponent,
        CardComponent
      ],
      imports: [
        MaterialModule,
        SharedModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
