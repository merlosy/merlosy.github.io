import { MaterialModule } from '@angular/material';
import { ProjectsService } from './projects.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ProjectsComponent
  ],
  declarations: [
    ListComponent,
    ProjectsComponent
  ],
  providers: [
    ProjectsService
  ],
})
export class ProjectsModule { }
