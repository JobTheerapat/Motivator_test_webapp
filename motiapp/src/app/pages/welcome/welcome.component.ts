import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  constructor() {}

  ngOnInit() {
    console.log('Welcome to Motivator App!');
    // console.log(localStorage);
  }
}
