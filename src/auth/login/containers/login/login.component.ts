import { Component } from '@angular/core';

@Component({
    selector: 'login',
    template: `
        <div>
            Login
            <auth-form></auth-form>    
        </div>
    `
})

export class LoginComponent {
    constructor() {}
}