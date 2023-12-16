import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyGoalsComponent } from './money-goals.component';

describe('MoneyGoalsComponent', () => {
  let component: MoneyGoalsComponent;
  let fixture: ComponentFixture<MoneyGoalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoneyGoalsComponent]
    });
    fixture = TestBed.createComponent(MoneyGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
