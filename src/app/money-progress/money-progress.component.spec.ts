import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyProgressComponent } from './money-progress.component';

describe('MoneyProgressComponent', () => {
  let component: MoneyProgressComponent;
  let fixture: ComponentFixture<MoneyProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoneyProgressComponent]
    });
    fixture = TestBed.createComponent(MoneyProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
