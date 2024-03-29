import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment.development';
//import { LoginComponent } from './user/login/login.component';
//import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
//import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
//import { VerifyEmailComponent } from './user/verify-email/verify-email.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ErrorComponent } from './core/error/error.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { DeleteCompanyComponent } from './company/delete-company/delete-company.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularFirestoreCollectionGroup } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // RegisterComponent,
    HomeComponent,
    // ForgotPasswordComponent,
    // VerifyEmailComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
