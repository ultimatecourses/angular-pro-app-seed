import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

// services
import { AuthService } from "../../../shared/services/auth/auth.service";

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  
  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async registerUser(event: FormGroup) {
    const { email, password } = event.value; 
    try {
      await this.authService.createUser(email, password);
      this.router.navigate(['/']);
    } catch (error) {
      this.error = error.message;
    }
  }
}