import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule, MdSidenavModule } from '@angular/material';
import { RouterLink, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule,
    MaterialModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    MenuComponent,
    PageHeaderComponent
  ],
  exports: [
    MenuComponent,
    PageHeaderComponent
  ]
})
export class SharedModule { }
