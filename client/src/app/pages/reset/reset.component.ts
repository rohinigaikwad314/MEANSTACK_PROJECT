import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { confirmPasswordValidators } from 'src/app/validators/confirmPassword.validators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
})
export default class ResetComponent implements OnInit {
  resetForm!: FormGroup;
  fb = inject(FormBuilder);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  authService = inject(AuthService)

  token!: string;

  ngOnInit() {
    this.resetForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
    {
      validator: confirmPasswordValidators('password', 'confirmPassword'),
    });

    this.activatedRoute.params.subscribe((val) => {
      this.token = val['token'];
      console.log(this.token);
    });
  }
  reset() {

    let resetObj = {
      token:this.token,
      password:this.resetForm.value.password
    }
    this.authService.resetPasswordService(resetObj).subscribe({
      next: (res) => {
        alert(res.message);
        this.resetForm.reset();
        this.router.navigate(['login'])
      },
      error: (err) => {
        alert(err.error.message);
      },
    });
  }
}
