import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  domains = EMAIL_DOMAINS;

  constructor(private auth: AuthService){}

  login(form: NgForm){

      if (form.invalid) {
        return;
      }
  
      const { email, password } = form.value;
    
      this.auth.login(email, password);
  }

  signInWithGoogle(){
    this.auth.googleSignIn();
  }
}
