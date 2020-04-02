import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { routes } from './routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)//now router module is set up with the routes
  ],
  exports:[
    RouterModule
  ]//exports is to export our routermodule to our app module so 
  //that the app module can also useour router
})
export class AppRoutingModule { }
