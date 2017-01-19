import { ProjectsModule } from './projects/projects.module';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
// Add the RxJS Observable operators.
import './rxjs-operators';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'todo',  component: TodoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    TodoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
