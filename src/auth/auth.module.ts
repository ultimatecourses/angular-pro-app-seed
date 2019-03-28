import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' }, 
            { path: 'login', loadChildren: './login/login.module#LoginModule' }, 
            { path: 'register', loadChildren: './register/register.module#RegisterModule' }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(ROUTES)
    ]
})

export class AuthModule {}