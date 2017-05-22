import { MaterialModule, MdDialogModule } from '@angular/material';
import { ProjectsService } from './projects.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from './../shared/shared.module';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MdDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    DialogComponent
  ],
  exports: [
    ProjectsComponent
  ],
  declarations: [
    ListComponent,
    CardComponent,
    ProjectsComponent,
    DialogComponent
  ],
  providers: [
    ProjectsService
  ],
})
export class ProjectsModule { }
