import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { ProjectsModule } from './projects/projects.module';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from './shared/shared.module';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent
  ],
  imports: [
    APP_ROUTES,
    MaterialModule,
    CommonModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ProjectsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
