import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule, MdSidenavModule } from '@angular/material';
import { RouterLink, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { PageHeaderComponent } from './page-header/page-header.component';

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { provideApolloClient } from 'app/shared/apollo.service';


@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule,
    MaterialModule,
    RouterModule,
    HttpModule,
    ApolloModule.forRoot(provideApolloClient)
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
