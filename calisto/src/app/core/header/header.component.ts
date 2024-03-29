import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private auth: AuthService, private router: Router) {};

  get isLogged() : boolean | null{
    return localStorage.getItem('token') ? true : null;
  }

  //based on user, but i can't remove it
  // isLogged(){
  //   return this.auth.isLoggedIn();
  // }

  logout(){
    this.auth.logout();
  }

  
}
