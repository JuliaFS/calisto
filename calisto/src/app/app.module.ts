import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//...............
// import { provideFirebaseApp, getApp, initializeApp  } from '@angular/fire/app';

// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { FIREBASE_OPTIONS } from '@angular/fire/compat';
//...............
//import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// import { getStorage, provideStorage } from '@angular/fire/storage';

//-----------
import { AngularFireModule } from '@angular/fire/compat';
//import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

//-----------


// import { FirebaseApp, FirebaseAppModule, initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { provideAuth, getAuth } from '@angular/fire/auth';

 //import { provideAuth, getAuth } from '@angular/fire/auth';
 //import { provideFirestore, getFirestore } from '@angular/fire/firestore';


import { environment } from 'src/environments/environment.development';

import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
     //provideAuth(() => getAuth()),

    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    //AngularFireAuthModule,
    //AngularFirestoreModule.enablePersistence(),

    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),

    //AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule
  ],
  providers: [], //{provide: FIREBASE_OPTIONS, useValue: environment.firebase}
  bootstrap: [AppComponent]
})
export class AppModule { }
