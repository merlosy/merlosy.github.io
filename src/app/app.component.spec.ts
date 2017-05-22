import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ROUTES_STUBS, DummyComponent } from './../test/routes-stubs';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MaterialModule,
        SharedModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
