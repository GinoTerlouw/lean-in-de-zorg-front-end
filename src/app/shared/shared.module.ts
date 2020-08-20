import { NgModule } from '@angular/core';
import { sharedRoutes } from './shared.routes';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {ApiService} from './services/api.service';
import {HomeComponent} from '../home/home.component';
import {AccountsListComponent} from '../accounts-list/accounts-list.component';
import {AccountManagementService} from './services/account-management.service';



@NgModule({
  declarations: [
    HomeComponent,
    AccountsListComponent
  ],

  exports: [
  ],

  imports: [
    RouterModule.forRoot(sharedRoutes),
    CommonModule,
    HttpClientModule
  ],

  entryComponents: [

  ],

  providers: [
    CommonModule,
    ApiService,
    AccountManagementService
  ]
})

export class SharedModule {}
