import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public auth: AuthService, private router: Router) {};

  // get isLogged() : boolean | null{
  //   return localStorage.getItem('token') ? true : null;
  // }

  // logout(){
  //   this.auth.logout();
  // }

  get isLoggedIn(): boolean {
    return this.auth.isLogged;
  }

  get username(): string {
    return this.auth.user?.username || '';
  }

  logout() {
    this.auth.logout().subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: () => {
        this.router.navigate(['/auth/login']);
      },
    });
  }
  
}
