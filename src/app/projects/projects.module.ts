import { ProjectsService } from './projects.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from './../shared/shared.module';
import {
  MatCheckboxModule, MatRadioModule, MatCardModule, MatChipsModule,
  MatIconModule,
  MatGridListModule,
  MatButtonModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatDialogModule
} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

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
    MatDialogModule,
    MatIconModule,
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
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
  entryComponents: [
    DialogComponent
  ],
  providers: [
    ProjectsService
  ],
})
export class ProjectsModule { }
