import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    NzAvatarModule,
    NzProgressModule,
    NzDividerModule,
    NzSpaceModule,
    NzIconModule,
    RouterModule,
    NzRateModule,
    FormsModule
  ],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  public currentDate: Date = new Date();
  totalCoins: number = 30;
  userName: string = 'Martin Pollis';
  activities = [
    { name: 'นั่งสมาธิ 10 นาที' },
    { name: 'เล่นโยคะ 10 นาที' }
  ];
  nutritionProgress: number = 80;
  workoutProgress: number = 50;
  readingProgress: number = 15;
  activityCompletion: number = 87;
  public   rating = 0; // Default rating (no selection)

  getEmojiIconForRating(rating: number): string {
    switch (rating) {
      case 1: return 'frown';  // Icon for bad rating
      case 2: return 'meh';    // Icon for neutral rating
      case 3: return 'smile';  // Icon for good rating
      case 4: return 'smile'   // More smiley for good rating
      case 5: return 'heart'   // Icon for excellent rating
      default: return 'question';  // Default icon when no rating
    }
  }

}
