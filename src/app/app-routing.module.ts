import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { PageHeaderComponent } from './shared/page-header/page-header.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'todo',  component: TodoComponent },
];
/**
 * A retester plus tard 
 */
@NgModule({
  declarations: [
    // TodoComponent,
    // HomeComponent,
    // PageHeaderComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot()
  ],
  exports: [
      RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
