// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent {

// }
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // เปิดใช้งานโหมด Standalone
  imports: [
    CommonModule,    // สำหรับการใช้งาน HTML พื้นฐาน
    FormsModule,     // สำหรับ Two-way binding
    NzButtonModule,  // สำหรับปุ่ม
    NzInputModule,   // สำหรับ input
    NzFormModule     // สำหรับฟอร์ม
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {}

  username: string = '';
  password: string = '';

  predefinedUsername: string = 'admin';
  predefinedPassword: string = '12345678';

  onSubmit() {
    if (this.username === this.predefinedUsername && this.password === this.predefinedPassword) {
      alert('Login Successful!');
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/welcome']);
    } else {
      alert('Invalid Username or Password');
    }
  }
}
