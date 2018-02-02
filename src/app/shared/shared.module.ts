import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatButtonModule, MatTooltipModule, MatToolbarModule } from '@angular/material';

import { MenuComponent } from './menu/menu.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // Material modules
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule
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
