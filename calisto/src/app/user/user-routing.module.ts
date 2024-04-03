import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthActivate } from '../guards/auth.activate';

import { FormAuthGuard } from '../guards/authFn.activate';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthActivate] }, 
  { path: 'register', component: RegisterComponent, canActivate: [FormAuthGuard] },
  //{ path: 'profile', component: ProfileComponent },
  { path: 'verify-email', component: VerifyEmailComponent, canActivate: [FormAuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [FormAuthGuard]  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}