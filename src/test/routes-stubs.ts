import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  template: ''
})
export class DummyComponent {
}

const ROUTES: Routes = [
  { path: 'home',  component: DummyComponent },
  { path: 'projects',  component: DummyComponent },
  { path: 'todo',  component: DummyComponent }
];

export const ROUTES_STUBS = ROUTES;
