import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../user/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthActivate implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isLogged) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}

// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   const token = localStorage.getItem('token');
//   console.log(route);
//   console.log(state);
//   const router = inject(Router);
//   console.log('Im in auth guard');
//   console.log('token', token);
//   if(this.auth.isLogged) {
//     return true;
//   } 

//     router.navigate(['/auth/login']);
//     return false;
  
// };

// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from '../user/auth.service';

// @Injectable({ providedIn: 'root' })
// export class AuthActivate implements CanActivate {
//   constructor(private auth: AuthService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | boolean
//     | UrlTree
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree> {

//         const token = localStorage.getItem('token');
//         console.log('isLogged: ' + this.auth.isLogged);
//         console.log(route);
//         console.log(state);
//         // const router = inject(Router);
//         console.log('Im in auth guard');
//         console.log('token', token);

//         if (this.auth.isLogged) {
//           return true;
//         } else {
//           this.router.navigate(['/auth/login']);
//           return false;
//         }

//         //return true;

//     // return this.auth.isLogged;
//   }
// }

// constructor(private router: Router) {

// }
// canActivate(
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//   const token = localStorage.getItem('token');
//   console.log(route);
//   console.log(state);
//   // const router = inject(Router);
//   console.log('Im in auth guard');
//   console.log('token', token);
//   if (token) {
//     return true;
//   } else {
//     this.router.navigate(['login']);
//     return false;
//   }
//   return true;
// }

// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthClassGuard implements CanActivate {
//   constructor(private router: Router) {

//   }
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     const token = localStorage.getItem('token');
//     console.log(route);
//     console.log(state);
//     // const router = inject(Router);
//     console.log('Im in auth guard');
//     console.log('token', token);
//     if (token) {
//       return true;
//     } else {
//       this.router.navigate(['login']);
//       return false;
//     }
//     return true;
//   }

// // }