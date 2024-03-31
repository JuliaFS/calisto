import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { matchPasswordsValidator } from 'src/app/shared/utils/match-passwords-validator';
import { AuthService } from '../auth.service';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    //username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    //tel: [''],
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
   // private router: Router
  ) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const {
      email,
      passGroup: { password, rePassword } = {},
    } = this.form.value;

    this.auth.register(email!, password!, rePassword!);
  }
  // email: string = '';
  // password: string = '';

  //constructor(private auth: AuthService){}

  // register(){
  //   if(!this.email){
  //     alert('Fill email!');
  //     return;
  //   }

  //   if(!this.password){
  //     alert('Fill password!');
  //     return;
  //   }

  //   this.auth.register(this.email, this.password);
  //   this.email = '';
  //   this.password = '';
    
  // }
}
