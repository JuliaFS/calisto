import { Component, OnInit } from '@angular/core';
import { AuthActivate } from 'src/app/guards/auth.activate';
import { AuthService } from 'src/app/user/auth.service';
//import { UserService } from '../user/user.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
})
export class AuthenticateComponent implements OnInit {
  isAuthenticating = true;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
     this.auth.isLogged.subscribe({
       next: () => {
         this.isAuthenticating = false;
       },
       error: () => {
         this.isAuthenticating = false;
       },
       complete: () => {
         this.isAuthenticating = false;
       },
     });
  }
}
canActivate: [AuthActivate]