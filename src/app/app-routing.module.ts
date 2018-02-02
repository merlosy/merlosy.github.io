import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { PageHeaderComponent } from './shared/page-header/page-header.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'projects',  component: ProjectsComponent },
  { path: 'todo',  component: TodoComponent },
  { path: '**', redirectTo: '' }
];

/**
 * A retester plus tard
 */
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
