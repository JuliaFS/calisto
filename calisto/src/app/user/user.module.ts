import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AngularFirestoreCollectionGroup } from '@angular/fire/compat/firestore';



@NgModule({
  declarations: [LoginComponent, ProfileComponent, RegisterComponent, ForgotPasswordComponent ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    FormsModule,
  ]
})
export class UserModule { }
