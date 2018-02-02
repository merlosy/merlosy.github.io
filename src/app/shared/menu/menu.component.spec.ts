import { ROUTES_STUBS, DummyComponent } from './../../../test/routes-stubs';
import { MaterialModule } from '@angular/material';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuComponent } from './menu.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {} from 'jasmine';

@Component({
  selector: 'app-menu-test',
  template: '<app-menu></app-menu>'
})
class TestMenuComponent {}

describe('MenuComponent', () => {
  let component: MenuComponent;
  // let fixture: ComponentFixture<TestMenuComponent>;
  let fixture: ComponentFixture<MenuComponent>;
  // let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent,
        DummyComponent
        // TestMenuComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(ROUTES_STUBS),
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  // beforeEach(inject([Router], (_router) => {
  //   router = _router;
  // }) );

  beforeEach(() => {
    // fixture = TestBed.createComponent(TestMenuComponent);
    fixture = TestBed.createComponent(MenuComponent);
    // component = fixture.debugElement.children[0].componentInstance;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
