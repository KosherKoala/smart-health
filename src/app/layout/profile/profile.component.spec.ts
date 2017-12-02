import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DoctorService, ProcedureService, HistoryService, UserService, CalendarService, AppointmentService, AuthenticationService} from '../../services'

import {PdfmakeService} from 'ng-pdf-make';
import { RouterModule, Router } from '@angular/router';
import { MockDoctorService } from '../../mocks/mock-doctor-service'
import { MockAuthService } from '../../mocks/mock-auth-service'
import { MockUserService } from '../../mocks/mock-user-service'
import { Http, HttpModule } from '@angular/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StatModule } from '../../shared';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [BrowserAnimationsModule, NgbModule.forRoot(), FormsModule, RouterTestingModule, StatModule],
      providers: [
        { provide: DoctorService, useClass: MockDoctorService },
        { provide: CalendarService, useClass: MockDoctorService },
        { provide: AppointmentService, useClass: MockDoctorService },
        { provide: AuthenticationService, useClass: MockAuthService },
        { provide: UserService, useClass: MockUserService },
        { provide: HistoryService, useClass: MockAuthService },
        { provide: ProcedureService, useClass: MockAuthService },
     //   { provide: UserService, useClass: MockAuthService },
        { provide: Http },
        {provide: PdfmakeService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
