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
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {};

  get isLogged() : boolean | null{
    return localStorage.getItem('token') ? true : null;
  }
  ngOnInit(): void {
  //   this.data.getAllCompanies().subscribe({
  //     next: () => {

  //   }, 
  //   error: () => {
      
  //   },
  // });
  }
  
  //based on user, but i can't remove it
  // isLogged(){
  //   return this.auth.isLoggedIn();
  // }

  logout(){
    this.auth.logout();
  }

  
}
