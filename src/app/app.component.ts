import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FirebaseService } from './firebase.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <input type="text" [(ngModel)]="name">
    <button (click)="saveData()">Mentés</button>
  `
})

export class AppComponent {
  
title: any;
products: any;
  translate: any;
constructor(private firebaseService: FirebaseService) {
  console.log('Firebase App:', this.firebaseService.app);
}
  // constructor(private translate: TranslateService) {
  //   translate.addLangs(['en', 'hu']);
  //   translate.setDefaultLang('en');
  // }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
