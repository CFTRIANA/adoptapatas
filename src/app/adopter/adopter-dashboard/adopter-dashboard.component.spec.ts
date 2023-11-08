import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopterDashboardComponent } from './adopter-dashboard.component';

describe('AdopterDashboardComponent', () => {
  let component: AdopterDashboardComponent;
  let fixture: ComponentFixture<AdopterDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdopterDashboardComponent]
    });
    fixture = TestBed.createComponent(AdopterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
