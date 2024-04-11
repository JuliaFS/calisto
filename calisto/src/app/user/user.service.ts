import { Injectable } from '@angular/core';

import {
  collection,
  doc,
  docData,
  Firestore,
  getDoc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
//import { UserProfile } from 'firebase/auth';
////import { query } from 'firebase/firestore';
//import { collectionData } from 'rxfire/firestore';

import { AuthService } from './auth.service';

import { from, Observable } from 'rxjs';
import { ProfileUser } from '../model/profile-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor( private firestore: Firestore, private authService: AuthService ) { }

  // addUser(user: ProfileUser): Observable<void> {
  //   const ref = doc(this.firestore, 'users', user.uid);
  //   return from(setDoc(ref, user));
  // }
}
