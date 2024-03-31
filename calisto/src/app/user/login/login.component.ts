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
  // email: string = '';
  // password: string = '';

  constructor(private auth: AuthService){}

  login(form: NgForm){
    // if(!this.email){
    //   alert('Fill email!');
    //   return;
    // }

    // if(!this.password){
    //   alert('Fill password!');
    //   return;
    // }

    // this.auth.login(this.email, this.password);
    // this.email = '';
    // this.password = '';
      if (form.invalid) {

        return;
      }
  
      const { email, password } = form.value;
      // try{
      //   this.auth.login(this.email, this.password);
      // } catch(err => {
      //   console.log(err);
      // })
    
      this.auth.login(email, password);
  
      // this.userService.login(email, password).subscribe(() => {
      //   this.router.navigate(['/themes']);
      // });
    //}
  }



  signInWithGoogle(){
    this.auth.googleSignIn();
  }
}
