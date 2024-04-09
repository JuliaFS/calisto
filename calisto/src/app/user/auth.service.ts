import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { getAuth } from "firebase/auth";
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router, private location: Location) { }

  message : string = '';
  //login method
  login(email: string, password: string){
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

    //register method
    register(email: string, password: string, rePassword: string){
      return this.fireAuth.createUserWithEmailAndPassword(email, password);
      // .then((res) => {
      //   localStorage.setItem('token', 'true');
      //   alert('register succesfull');
      //   this.router.navigate(['/home']);
      //   this.sendEmailForVerification(res.user);
      // }, err => {
      //   console.log('register error: ' + err.message);
      //   this.router.navigate(['/auth/register']);
      // })
    }

    //working with 
    // isLoggedIn(){
    //   this.fireAuth.currentUser.then((res) => {
    //     if(res){
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   });
    // }

    //sign out
    logout(){
      this.fireAuth.signOut().then((res) => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        this.router.navigate(['/home']);
      }, err => {
        alert(err.message);
      })
    }

    //forgot password
    forgotPassword(email: string){
      return this.fireAuth.sendPasswordResetEmail(email);
      // .then(() => {
      //   this.router.navigate(['/auth/verify-email']);
      // }, err => {
      //   console.log('Reset password wrong' + err.message);
      // })
    }

    //email verification
    sendEmailForVerification(user : any){
      return user.sendEmailVerification();
      // .then((res : any ) => {
      //   this.router.navigate(['/verify-email']);
      // }, (err : any ) => {
      //   alert('Problem with email verification: ' + err.message );
      // })
    }

    //sign in with google
    googleSignIn(){
      return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then((res) => {
        this.router.navigate(['/home']);
        localStorage.setItem('token', JSON.stringify(res.user?.uid));
      }, err => {
        alert(err.message);
      })
    }

    get isLogged(): boolean {
      const auth = getAuth();
      const user = auth.currentUser;
      if(user){
        //console.log('isLogged from if')
        return true;
      } else {
        //console.log('is logged from else')
        return false;
      }
      //return !!user;
    }

    get isLoggedUser(): boolean{
      if(localStorage.getItem('userId')){
        //console.log('in localstorage get item true')
        return true;
      } else {
        //console.log('in localstorage get item false')
        return false;
      }
    }

    userUid(){
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // ...
        //console.log(user.uid);
        return user.uid;
      } else {
          return "No such user!";
        // No user is signed in.
      }
    }
}
