import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  domains = EMAIL_DOMAINS;
  serverMessage : string = '';

  constructor(private auth: AuthService, private router: Router, private location: Location){}

  login(form: NgForm){

      if (form.invalid) {
        return;
      }
  
      const { email, password } = form.value;
    
      this.auth.login(email!, password! ).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
       error: () => {
        this.serverMessage = 'Pls check your email and password or such user do not exist!';
        this.router.navigate(['/auth/login']);
      }
    });
  }

  signInWithGoogle(){
    this.auth.googleSignIn();
  }
}
