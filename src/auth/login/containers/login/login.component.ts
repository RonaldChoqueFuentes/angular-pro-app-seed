import { Component } from '@angular/core';

@Component({
    selector: 'login',
    template: `
        <div>
            login
            <auth-form> </auth-form> 
        </div>
    `
})
export class LoginComponent {
    constructor() {}
}