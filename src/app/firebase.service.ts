import { Injectable } from '@angular/core';
import { firebaseApp, firebaseAnalytics } from './firebase-config';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  app = firebaseApp;
  analytics = firebaseAnalytics;

  constructor() {
    console.log('Firebase initialized:', this.app);
  }
}
