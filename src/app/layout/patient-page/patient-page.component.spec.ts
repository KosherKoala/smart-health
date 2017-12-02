import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component'
import {DoctorService, PatientService, CalendarService, AppointmentService, AuthenticationService} from '../../services'

import { CalendarModule } from 'angular-calendar';
import { RouterModule, Router } from '@angular/router';
import { MockDoctorService } from '../../mocks/mock-doctor-service'
import { MockAuthService } from '../../mocks/mock-auth-service'
import { Http, HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PatientPageComponent } from './patient-page.component';

describe('PatientPageComponent', () => {
  let component: PatientPageComponent;
  let fixture: ComponentFixture<PatientPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPageComponent, CalendarHeaderComponent ],
      imports: [NgbModule.forRoot(),
                RouterTestingModule,
                BrowserAnimationsModule,
                CalendarModule],
      providers: [
        { provide: DoctorService, useClass: MockDoctorService },
        { provide: PatientService, useClass: MockDoctorService },
        { provide: CalendarService, useClass: MockDoctorService },
        { provide: AppointmentService, useClass: MockDoctorService },
        { provide: AuthenticationService, useClass: MockAuthService },
      //   { provide: UserService, useClass: MockAuthService },
        { provide: Http }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
