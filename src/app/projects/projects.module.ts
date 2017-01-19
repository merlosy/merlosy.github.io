import { ProjectsService } from './projects.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent
  ],
  declarations: [ListComponent],
  providers: [
    ProjectsService
  ],
})
export class ProjectsModule { }
