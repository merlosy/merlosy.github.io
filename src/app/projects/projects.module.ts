import { MaterialModule } from '@angular/material';
import { ProjectsService } from './projects.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { FiltersPipe } from './filters.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ListComponent
  ],
  declarations: [ListComponent, FiltersPipe],
  providers: [
    ProjectsService
  ],
})
export class ProjectsModule { }
