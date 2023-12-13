import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradelistComponent } from './upgradelist.component';

describe('UpgradelistComponent', () => {
  let component: UpgradelistComponent;
  let fixture: ComponentFixture<UpgradelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpgradelistComponent]
    });
    fixture = TestBed.createComponent(UpgradelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
