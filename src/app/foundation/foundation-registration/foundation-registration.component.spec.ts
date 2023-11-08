import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationRegistrationComponent } from './foundation-registration.component';

describe('FoundationRegistrationComponent', () => {
  let component: FoundationRegistrationComponent;
  let fixture: ComponentFixture<FoundationRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoundationRegistrationComponent]
    });
    fixture = TestBed.createComponent(FoundationRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
