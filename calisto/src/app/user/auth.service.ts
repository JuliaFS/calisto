import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AngularFireAuth } from '@angular/fire/compat/auth';

//import { getAuth, User } from "firebase/auth"; //!!!TO DO


import { BehaviorSubject, Observable, Subscription, catchError, from, map, tap, throwError } from 'rxjs';
//import { UserForAuth } from '../model/userForAuth';


//import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserForAuth } from '../model/userForAuth';
import { FirebaseError } from 'firebase/app';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; 
import { User } from '../model/user';
//import { Auth, createUserWithEmailAndPassword, UserCredential } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
      private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
     private user$ = this.user$$.asObservable();
   
     user: UserForAuth | undefined;
     USER_KEY = '[user]';
   
     userSubscription: Subscription;

     get isLogged(): boolean {
      console.log(!!this.user)
      return !!this.user;
    }


  constructor(
    private afAuth: AngularFireAuth,
    private http: HttpClient,
    private router: Router, 
    private location: Location) {
      this.userSubscription = this.user$.subscribe((user) => {
        this.user = user;
      });
    }

  login(email: string, password: string) {
    return this.http.post<UserForAuth>
    (`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`, { email, password, returnSecureToken: true })
      .pipe(
        tap(user => console.log(user)),
        tap((user) => this.user$$.next(user)),
        tap(user => console.log(user))
      );
  }

register(
  username: string,
  email: string,
  password: string,
  rePassword: string
) {
  return this.http
    .post<UserForAuth>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`, {
      username,
      email,
      password,
      rePassword,
      returnSecureToken: true
    })
    .pipe(
      //tap(user => console.log('before' + user)),
      tap((user) => this.user$$.next(user)),
      //tap(user => console.log(user))
      )
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
    // logout(): Observable<any> {
    //   return from(this.afAuth.signOut());
    // }
    logout() {
      return this.http
        .post(`https://identitytoolkit.googleapis.com/v1/accounts:signOut?key=${environment.firebase.apiKey}`, {})
        .pipe(tap(() => this.user$$.next(undefined)));
    }

    // //forgot password
    //forgotPassword(email: string): Observable<any> {
    //   return from(this.afAuth.sendPasswordResetEmail(email))
    //   .pipe(
    //     catchError((error: FirebaseError) => 
    //       throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
    //     )
    //   )
    // }

     forgotPassword(email: string): Observable<void> {
      return from(this.afAuth.sendPasswordResetEmail(email))
      .pipe(
        catchError((error: FirebaseError) => 
          throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
        )
      )
    }

    private translateFirebaseErrorMessage({code, message}: FirebaseError) {
      if (code === "auth/user-not-found") {
        return "User not found.";
      }
      if (code === "auth/invalid-email") {
        return "User not found.";
      }
      return message;
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

     //get isLogged(): boolean {
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
     // return false;
      //return !!user;
    // }

      get isLoggedUser(): boolean{
      if(localStorage.getItem('userId')){
        console.log('in localstorage get item true')
        return true;
      } else {
        console.log('in localstorage get item false')
       return false;
      }
    }
      
     //....better method
    //  return this.afAuth.currentUser !== null;
     // }

     
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

     ngOnDestroy(): void {
      this.userSubscription.unsubscribe();
    }
}
