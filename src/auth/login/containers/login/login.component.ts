import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

// services
import { AuthService } from '../../../shared/services/auth/auth.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  

  constructor(
    private authService: AuthService
  ) {}

  loginUser(event: FormGroup) {
    const { email, password } = event.value;
    this.authService.loginUser(email, password);
  }


}