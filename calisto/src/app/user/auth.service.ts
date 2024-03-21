import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  //login method
  login(email: string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/home']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

    //register method
    register(email: string, password: string){
      this.fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
        localStorage.setItem('token', 'true');
        alert('register succesfull');
        this.router.navigate(['/home']);
      }, err => {
        alert('register error: ' + err.message);
        this.router.navigate(['/register']);
      })
    }

    //sign out
    logout(){
      this.fireAuth.signOut().then(() => {
        localStorage.removeItem('token');
        this.router.navigate(['/home']);
      }, err => {
        alert(err.message);
      })
    }

    //forgot password
    forgotPassword(email: string){
      this.fireAuth.sendPasswordResetEmail(email).then(() => {
        this.router.navigate(['/verify-email']);
      }, err => {
        alert('Reset password wrong' + err.message);
      })
    }
}
