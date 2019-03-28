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


/**
    var config = {
        apiKey: "AIzaSyDVhnpsUB1jvQkFC4kLBWQfyn8iU7fEW1o",
        authDomain: "fitness-app-84abb.firebaseapp.com",
        databaseURL: "https://fitness-app-84abb.firebaseio.com",
        projectId: "fitness-app-84abb",
        storageBucket: "fitness-app-84abb.appspot.com",
        messagingSenderId: "163509335585"
    };
 */
