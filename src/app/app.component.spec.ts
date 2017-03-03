/* tslint:disable:no-unused-variable */

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router, RouterOutlet, RouterLink, ActivatedRoute, RouterOutletMap } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { MaterialModule } from '@angular/material';
import MockRouter from '../test/MockRouter.spec';


describe('AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent,
        RouterOutlet
      ],
      providers: [
        {provide: Router,  useClass: MockRouter },
        {provide: ActivatedRoute,  useClass: MockRouter },
        RouterLink,
        RouterOutletMap
      ],
      imports: [
        MaterialModule
      ]
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    fixture.detectChanges();
    expect(comp).toBeDefined();
  }));

});
