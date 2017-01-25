import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterLink, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    MenuComponent,
    PageHeaderComponent
  ],
  exports: [
    MenuComponent,
    PageHeaderComponent
  ],
  providers: [
    RouterLink
  ]
})
export class SharedModule { }
