import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
/*
var config = {
    apiKey: "AIzaSyCm8t90Z3v22FOOmgTHXbYQrD9GoM1EHEg",
    authDomain: "fitness-app-b3667.firebaseapp.com",
    databaseURL: "https://fitness-app-b3667.firebaseio.com",
    projectId: "fitness-app-b3667",
    storageBucket: "fitness-app-b3667.appspot.com",
    messagingSenderId: "591640120403"
  };


*/