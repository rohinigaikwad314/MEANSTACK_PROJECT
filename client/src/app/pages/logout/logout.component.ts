import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export default class LogoutComponent {
  router = inject(Router);
  logout() {
    this.router.navigate(['login']);
  }
}
