import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthActivate } from '../guards/auth.activate';
import { authState } from '@angular/fire/auth';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthActivate] }, 
  { path: 'register', component: RegisterComponent, canActivate: [AuthActivate] },
  //{ path: 'profile', component: ProfileComponent },
  { path: 'verify-email', component: VerifyEmailComponent, canActivate: [AuthActivate]  },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [AuthActivate]  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}