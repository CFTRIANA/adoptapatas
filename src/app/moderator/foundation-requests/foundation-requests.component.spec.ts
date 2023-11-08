import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationRequestsComponent } from './foundation-requests.component';

describe('FoundationRequestsComponent', () => {
  let component: FoundationRequestsComponent;
  let fixture: ComponentFixture<FoundationRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoundationRequestsComponent]
    });
    fixture = TestBed.createComponent(FoundationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
