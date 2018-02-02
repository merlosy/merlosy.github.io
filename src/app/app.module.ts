import { MatCardModule, MatListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { ProjectsModule } from './projects/projects.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    // RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    SharedModule,
    HomeModule,
    ProjectsModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
