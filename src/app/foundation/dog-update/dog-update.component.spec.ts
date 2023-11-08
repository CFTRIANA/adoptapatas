import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogUpdateComponent } from './dog-update.component';

describe('DogUpdateComponent', () => {
  let component: DogUpdateComponent;
  let fixture: ComponentFixture<DogUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogUpdateComponent]
    });
    fixture = TestBed.createComponent(DogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
