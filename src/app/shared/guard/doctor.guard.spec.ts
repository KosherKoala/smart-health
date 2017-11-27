import { TestBed, async, inject } from '@angular/core/testing';

import { DoctorGuard } from './doctor.guard';

describe('DoctorGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorGuard]
    });
  });

  it('should ...', inject([DoctorGuard], (guard: DoctorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
