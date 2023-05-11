import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent {
  currentYear = new Date().getFullYear();
  user: any;
  constructor(private router: Router) {
    this.user = JSON.parse(localStorage.getItem('user') || '}');
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('authenticated');
    this.router.navigate(['/login']);
  }
}
