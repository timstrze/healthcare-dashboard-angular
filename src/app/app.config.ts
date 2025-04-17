import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyDaSpNacVF-_IaKTmWji_8sPjDwpuKDocE",
      authDomain: "healthfirst-medical-dashboard.firebaseapp.com",
      projectId: "healthfirst-medical-dashboard",
      storageBucket: "healthfirst-medical-dashboard.firebasestorage.app",
      messagingSenderId: "291543681485",
      appId: "1:291543681485:web:4df914169ae3983fdb9c84",
      measurementId: "G-1E46KWHRYR"
    })),
    provideFirestore(() => getFirestore()),
  ]
};
