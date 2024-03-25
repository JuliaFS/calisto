import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { VerifyEmailComponent } from './user/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { CompanyListComponent } from './company/company-list/company-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'company-list', component: CompanyListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: '/home' },
//   { path: 'home', component: HomeComponent },
//   { path: '**', redirectTo: '/404' },
//   { path: '404', component: ErrorComponent },
// ];
