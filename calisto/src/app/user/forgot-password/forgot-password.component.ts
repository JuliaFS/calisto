import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  email : string = '';
  domains = EMAIL_DOMAINS;

  constructor( private auth: AuthService ) {}

  forgotPassword(){
    this.auth.forgotPassword(this.email);
    this.email = '';
  }
}
