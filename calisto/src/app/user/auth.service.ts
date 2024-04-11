import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

//import { AngularFireAuth } from '@angular/fire/compat/auth';

// import {
//   Auth,
//   signInWithEmailAndPassword,
//   authState,
//   createUserWithEmailAndPassword,
//   updateProfile,
//   UserInfo,
//   UserCredential,
//   GoogleAuthProvider,
// } from '@angular/fire/auth';

//import { getAuth, User } from "firebase/auth"; //!!!TO DO
import { Location } from '@angular/common';

import { Observable, Subscription, catchError, from, map, tap } from 'rxjs';
//import { UserForAuth } from '../model/userForAuth';


//import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserForAuth } from '../model/userForAuth';
//import { Auth, createUserWithEmailAndPassword, UserCredential } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  //currentUser$ = authState(this.auth);

  // private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  // private user$ = this.user$$.asObservable();

  // user: UserForAuth | undefined;
  // USER_KEY = '[user]';

  // userSubscription: Subscription;


  constructor(
   private afAuth: AngularFireAuth,
    //public auth: Auth, 
    private router: Router, 
    private location: Location) {
      // this.userSubscription = this.user$.subscribe((user) => {
      //   this.user = user;
      // });
     }

  //message : string = '';


  //login method
  // ----
   login(email: string, password: string){
  //   return this.fireAuth.signInWithEmailAndPassword(email, password);
   }
  // ----

  // register(email: string, password: string): Observable<User> | null{
  //   return from(this.fireAuth.createUserWithEmailAndPassword(email, password))
  //     .pipe(
  //       map(credential => credential.user),
  //       tap(user => {
  //         console.log('signed up with email and password succesfully, user:', user);
  //       }),
  //       catchError((error, obs) => {
  //         console.error('signup with email and password failed, error:', error);
  //         return obs;
  //       })
  //     );
  // }

    //register method
    register( email: string, password: string ){


      // username: string;
      // email: string;
      // password: string;
      // id: string;
      // .post<UserForAuth>('/api/register', {
      //   username,
      //   email,
      //   tel,
      //   password,
      //   rePassword,
      // })
      // .pipe(tap((user) => this.user$$.next(user)));

      // -------
      // signUp(email: string, password: string): Observable<UserCredential> {
      //   return from(createUserWithEmailAndPassword(this.auth, email, password));
      // }

      // -----

      //return from(createUserWithEmailAndPassword(this.auth, email, password));

      //return from(createUserWithEmailAndPassword(this.auth, email, password));
      return this.afAuth.createUserWithEmailAndPassword(email, password);










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

    // ------------
    // //sign out
     logout(){
       this.afAuth.signOut().then((res) => {
         localStorage.removeItem('token');
         localStorage.removeItem('userId');
         this.router.navigate(['/home']);
       }, err => {
         alert(err.message);
       })
     }
    // ---------

    // //forgot password
     forgotPassword(email: string){
    //   return this.fireAuth.sendPasswordResetEmail(email);
    //   // .then(() => {
    //   //   this.router.navigate(['/auth/verify-email']);
    //   // }, err => {
    //   //   console.log('Reset password wrong' + err.message);
    //   // })
     }

    // //email verification
     sendEmailForVerification(user : any){
    //   return user.sendEmailVerification();
    //   // .then((res : any ) => {
    //   //   this.router.navigate(['/verify-email']);
    //   // }, (err : any ) => {
    //   //   alert('Problem with email verification: ' + err.message );
    //   // })
     }

    // //sign in with google
     googleSignIn(){
    //   return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then((res) => {
    //     this.router.navigate(['/home']);
    //     localStorage.setItem('token', JSON.stringify(res.user?.uid));
    //   }, err => {
    //     alert(err.message);
    //   })
     }

     get isLogged(): boolean {
    //   const auth = this.afAuth.authState;
    //  // const auth = getAuth();
    //   auth.subscribe({
    //     next: user => {
    //       if(user){
    //         return true;
    //       } else {
    //         return false;
    //       }
    //     },
        //error: err => console.error('Observable emitted an error: ' + err),
      //});
      return false;
      //return !!user;
     }

     get isLoggedUser(): boolean{
      if(localStorage.getItem('userId')){
        console.log('in localstorage get item true')
        return true;
      } else {
        console.log('in localstorage get item false')
       return false;
     }
      
     //....better method
    //  return this.afAuth.currentUser !== null;
      }

     
    //  //....................................
    //  //for authentication status
    //  get isAuthenticated(): boolean{
    //   return this.authService.isLoggedUser;
    //  }
    //  //....................................

     userUid(){
    //   const auth = getAuth();
    //   const user = auth.currentUser;

    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/auth.user
    //     // ...
    //     //console.log(user.uid);
    //     return user.uid;
    //   } else {
    //       return "No such user!";
    //     // No user is signed in.
    //   }
     }
}
