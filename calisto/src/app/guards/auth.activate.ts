import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../user/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthActivate implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
      console.log(this.auth.isLogged)
    return !this.auth.isLogged;
  }
}

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

//   canActivate(): boolean {
//     if (this.auth.isLogged) {
//       return true;
//     } else {
//       this.router.navigate(['/auth/login']);
//       return false;
//     }
//     return false;
//   }
// }