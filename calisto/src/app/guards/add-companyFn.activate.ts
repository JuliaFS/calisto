// import { Injectable, inject } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivateFn,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from '../user/auth.service';
// import { Router } from '@angular/router';


// export const AuthGuard: CanActivateFn = (
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     Observable<boolean | UrlTree> 
//     | Promise<boolean | UrlTree> 
//     | boolean 
//     | UrlTree=> {
  
//     return inject(AuthService).isLogged
//       ? true
//       : inject(Router).createUrlTree(['/auth/login']);
  
//   };

import { CanActivateFn } from "@angular/router";
import { inject } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";

export const AuthGuard: CanActivateFn = async (route, state) => {
  const angularFireAuth = inject(AngularFireAuth);
  const user = await angularFireAuth.currentUser;
  // coerce to boolean
  const isLoggedIn = !!user;
  return isLoggedIn;
};