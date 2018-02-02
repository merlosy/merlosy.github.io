import { ProjectsService } from './projects.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from './../shared/shared.module';
import {
  MatCheckboxModule, MatRadioModule, MatCardModule, MatChipsModule,
  MatIconModule,
  MatGridListModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatGridListModule,
    MatRadioModule
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
