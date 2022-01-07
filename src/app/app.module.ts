import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from '../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
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
const firebaseConfig = {
  apiKey: "AIzaSyDqxrBJszBCola9BVhMHzqSSYw7JqtUCUw",
  authDomain: "angular-fitness-app-4965b.firebaseapp.com",
  databaseURL: "https://angular-fitness-app-4965b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "angular-fitness-app-4965b",
  storageBucket: "angular-fitness-app-4965b.appspot.com",
  messagingSenderId: "190811107468",
  appId: "1:190811107468:web:63d1286e2e3a1a74888ba9",
  measurementId: "G-HT9P47SY8R"
};
*/