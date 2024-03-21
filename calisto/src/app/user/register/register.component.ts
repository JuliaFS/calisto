import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService){}

  register(){
    if(!this.email){
      alert('Fill email!');
      return;
    }

    if(!this.password){
      alert('Fill password!');
      return;
    }

    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
    
  }
}
