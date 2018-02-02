import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'app/home/home.component';
import { MatChipsModule, MatIconModule, MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatChipsModule,
    MatIconModule,
    MatGridListModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
