import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, Validators, NonNullableFormBuilder } from '@angular/forms';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { matchPasswordsValidator } from 'src/app/shared/utils/match-passwords-validator';
import { AuthService } from '../auth.service';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { Router } from '@angular/router';
//import { UserService } from '../user.service';
import { switchMap, tap } from 'rxjs';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  serverMessage : string = '';

  form = this.fb.group({
    username: ['', ],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required]],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator('password', 'rePassword')],
      }
    ),
  });

  get passGroup() {
    return this.form.get('passGroup');
  }

  constructor(
    private fb: NonNullableFormBuilder,
    private auth: AuthService,
    private router: Router,
    //private userS: UserService
  ) {}

  register(){
    if (this.form.invalid) {
      return;
    }
    const {
          username,
          email,
          passGroup: { password, rePassword } = {},
        } = this.form.value;

        this.auth
  .register(email!, password!)
      this.auth.register(email!, password!).then((res) => {
       localStorage.setItem('token', 'true');
       localStorage.setItem('userId', JSON.stringify(res.user?.uid));
       console.log(res);
       console.log('res.user: ' + res.user)

      this.router.navigate(['/home']);
      
      // this.auth.sendEmailForVerification(res.user).then((res : any ) => {
      //   this.router.navigate(['/auth/verify-email']);
      // }, (err : any ) => {
      //   this.serverMessage = err.message;
      // });
    }, err => {
      this.serverMessage = err.message;
      this.router.navigate(['/auth/register']);
    });
    // .pipe(
    //       tap(user => console.log(user)),
    //       // switchMap(( user ) =>
          
    //       //    //this.userS.addUser({ uid, email, displayName: username })
    //       // )//,
    //       // this.toast.observe({
    //       //   success: 'Congrats! You are all signed up',
    //       //   loading: 'Signing up...',
    //       //   error: ({ message }) => `${message}`,
    //       // })
    //     )
    //     .subscribe(() => {
    //       this.router.navigate(['/home']);
    //     });

        // addUser(user: ProfileUser): Observable<void> {
        //   const ref = doc(this.firestore, 'users', user.uid);
        //   return from(setDoc(ref, user));
        // }
    
        // this.auth.register(email!, password!, rePassword!).then((res) => {
        //   localStorage.setItem('token', 'true');
        //   localStorage.setItem('userId', JSON.stringify(res.user?.uid));
    
        //   this.router.navigate(['/home']);
          
        //   this.auth.sendEmailForVerification(res.user).then((res : any ) => {
        //     this.router.navigate(['/auth/verify-email']);
        //   }, (err : any ) => {
        //     this.serverMessage = err.message;
        //   });
        // }, err => {
        //   this.serverMessage = err.message;
        //   this.router.navigate(['/auth/register']);
        // });
  }

  // register(): void {
  //   if (this.form.invalid) {
  //     return;
  //   }

  //   const {
  //     email,
  //     passGroup: { password, rePassword } = {},
  //   } = this.form.value;

  //   this.auth.register(email!, password!, rePassword!).then((res) => {
  //     localStorage.setItem('token', 'true');
  //     localStorage.setItem('userId', JSON.stringify(res.user?.uid));

  //     this.router.navigate(['/home']);
      
  //     this.auth.sendEmailForVerification(res.user).then((res : any ) => {
  //       this.router.navigate(['/auth/verify-email']);
  //     }, (err : any ) => {
  //       this.serverMessage = err.message;
  //     });
  //   }, err => {
  //     this.serverMessage = err.message;
  //     this.router.navigate(['/auth/register']);
  //   });
  // }
}
