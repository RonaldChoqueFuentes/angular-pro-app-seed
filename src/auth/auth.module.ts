import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


//third -party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database'

//shared modules 
import { SharedModule } from './shared/shared.module';

export const ROUTES:Routes = [
 {
     path:'auth',
     children:[
         {path:'', pathMatch:'full', redirectTo:'login' },
         {path:'login', loadChildren:'./login/login.module#LoginModule' },
         {path:'register', loadChildren:'./register/register.module#RegisterModule' }
        ]
 }
];


var firebaseConfig:FirebaseAppConfig = {
    apiKey: "AIzaSyCm8t90Z3v22FOOmgTHXbYQrD9GoM1EHEg",
    authDomain: "fitness-app-b3667.firebaseapp.com",
    databaseURL: "https://fitness-app-b3667.firebaseio.com",
    projectId: "fitness-app-b3667",
    storageBucket: "fitness-app-b3667.appspot.com",
    messagingSenderId: "591640120403"
  };

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ]
})
export class AuthModule {}