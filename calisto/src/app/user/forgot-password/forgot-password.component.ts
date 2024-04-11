import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  email : string = '';
  domains = EMAIL_DOMAINS;
  serverMessage : string = '';

  constructor( private auth: AuthService, private router: Router ) {}

   forgotPassword(){
  //   this.auth.forgotPassword(this.email)
  //   .then((res : any ) => {
  //     this.serverMessage = 'Email was sent';
  //       this.router.navigate(['/auth/verify-email']);

  //     }, (err : any ) => {
  //       this.serverMessage = err.message;
  //     })
  //   this.email = '';
   }
}
