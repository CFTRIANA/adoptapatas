import { TestBed } from '@angular/core/testing';
import { CanLoad } from '@angular/router';

import { ModuleGuard } from './role.guard';

describe('ModuleGuard', () => {
  let executeGuard: CanLoad;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuleGuard],
    });

    executeGuard = TestBed.inject(ModuleGuard);
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
