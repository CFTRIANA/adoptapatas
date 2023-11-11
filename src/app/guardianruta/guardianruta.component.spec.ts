import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianrutaComponent } from './guardianruta.component';

describe('GuardianrutaComponent', () => {
  let component: GuardianrutaComponent;
  let fixture: ComponentFixture<GuardianrutaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardianrutaComponent]
    });
    fixture = TestBed.createComponent(GuardianrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
