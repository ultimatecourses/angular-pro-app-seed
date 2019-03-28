import { Component } from '@angular/core';

@Component({
    selector: 'register',
    template: `
        <div>
            Register
            <auth-form></auth-form>
        </div>
    `
})

export class RegisterComponent {
    constructor() {}
}