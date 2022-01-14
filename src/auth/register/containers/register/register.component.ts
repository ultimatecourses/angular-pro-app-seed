import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

// services
import { AuthService } from "../../../shared/services/auth/auth.service";

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  
  error: string;

  constructor(
    private authService: AuthService
  ) {}

  async registerUser(event: FormGroup) {
    const { email, password } = event.value; 
    try {
      await this.authService.createUser(email, password);
    } catch (error) {
      this.error = error.message;
    }
  }
}