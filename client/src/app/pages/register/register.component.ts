import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { confirmPasswordValidators } from 'src/app/validators/confirmPassword.validators';
import { AuthService } from 'src/app/services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export default class RegisterComponent {
  fb = inject(FormBuilder);
  registerForm!: FormGroup;

  authService = inject(AuthService);

  router = inject(Router)

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
        userName: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: confirmPasswordValidators('password', 'confirmPassword'),
      }
    );
  }

  submit() {
    this.authService.registerService(this.registerForm.value).subscribe({
      next: (res) => {
        alert('User Created');
        this.registerForm.reset();
        this.router.navigate(['login'])
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
