import { NgModule } from '@angular/core';
import { sharedRoutes } from './shared.routes';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {ApiService} from './services/api.service';
import {HomeComponent} from '../home/home.component';



@NgModule({
  declarations: [
    HomeComponent
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
  ]
})

export class SharedModule {}
