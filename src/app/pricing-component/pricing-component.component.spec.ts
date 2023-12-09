import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingComponentComponent } from './pricing-component.component';

describe('PricingComponentComponent', () => {
  let component: PricingComponentComponent;
  let fixture: ComponentFixture<PricingComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricingComponentComponent]
    });
    fixture = TestBed.createComponent(PricingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
