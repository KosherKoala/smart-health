import { TestBed, async, inject } from '@angular/core/testing';
import {AuthenticationService, UserService, 
  DoctorService, CalendarService, HistoryService, PatientService} from '../../services'

import { RouterTestingModule } from '@angular/router/testing';
import { Http, HttpModule } from '@angular/http';
import { NoAuthGuard } from './no-auth.guard';

describe('NoAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      providers: [NoAuthGuard, UserService, HistoryService]
    });
  });

  it('should ...', inject([NoAuthGuard], (guard: NoAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
