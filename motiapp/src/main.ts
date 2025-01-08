import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { AppComponent } from './app/app.component';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './app/pages/welcome/welcome.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },  // หน้าแรกเป็น Login
  { path: '', component: WelcomeComponent }, // เมื่อล็อกอินแล้วจะเข้า App
  // { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }           // ถ้าพิมพ์ URL ผิด ให้ไปที่หน้า Login
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // กำหนด Router
  ]
}).catch((err) => console.error(err));
