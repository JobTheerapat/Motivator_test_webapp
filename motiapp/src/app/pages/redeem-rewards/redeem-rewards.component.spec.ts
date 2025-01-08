import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemRewardsComponent } from './redeem-rewards.component';

describe('RedeemRewardsComponent', () => {
  let component: RedeemRewardsComponent;
  let fixture: ComponentFixture<RedeemRewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedeemRewardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedeemRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
