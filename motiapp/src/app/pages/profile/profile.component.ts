import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('ข้อมูลที่ส่ง:', this.profileForm.value);
      alert('บันทึกข้อมูลสำเร็จ');
    } else {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  }

  onReset(): void {
    this.profileForm.reset();
  }
}
