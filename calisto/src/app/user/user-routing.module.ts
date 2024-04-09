import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthActivate } from '../guards/auth.activate';

// import { FormAuthGuard } from '../guards/authFn.activate';
// import { AuthGuard } from '../guards/add-companyFn.activate';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthActivate] }, //canActivate: [AuthActivate]
  { path: 'register', component: RegisterComponent, canActivate: [AuthActivate] },//canActivate: [FormAuthGuard] 
  { path: 'profile', component: ProfileComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}