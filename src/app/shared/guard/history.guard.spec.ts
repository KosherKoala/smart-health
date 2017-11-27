import { TestBed, async, inject } from '@angular/core/testing';
import {AuthenticationService, UserService, 
  DoctorService, CalendarService, HistoryService, PatientService} from '../../services'

import { HistoryGuard } from './history.guard';

import { RouterTestingModule } from '@angular/router/testing';
import { Http, HttpModule } from '@angular/http';
describe('HistoryGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      providers: [HistoryGuard, UserService, HistoryService]
    });
  });

  it('should ...', inject([HistoryGuard], (guard: HistoryGuard) => {
    expect(guard).toBeTruthy();
  }));
});
