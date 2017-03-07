import { ProjectsComponent } from './projects/projects.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'projects',  component: ProjectsComponent },
  { path: 'todo',  component: TodoComponent },
  { path: '**', redirectTo: 'home' }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: true });
export const BASE_ROUTES = ROUTES;
