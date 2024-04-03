import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { matchPasswordsValidator } from 'src/app/shared/utils/match-passwords-validator';
import { AuthService } from '../auth.service';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  serverMessage : string = '';
  form = this.fb.group({
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
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const {
      email,
      passGroup: { password, rePassword } = {},
    } = this.form.value;

    this.auth.register(email!, password!, rePassword!).then((res) => {
      localStorage.setItem('token', 'true');
      localStorage.setItem('userId', JSON.stringify(res.user?.uid));

      this.router.navigate(['/home']);
      
      this.auth.sendEmailForVerification(res.user).then((res : any ) => {
        this.router.navigate(['/auth/verify-email']);
      }, (err : any ) => {
        this.serverMessage = err.message;
      });
    }, err => {
      this.serverMessage = err.message;
      this.router.navigate(['/auth/register']);
    });
  }
}
