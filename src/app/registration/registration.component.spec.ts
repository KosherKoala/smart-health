import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import {DoctorService, ProcedureService,
  HistoryService, UserService, HealthService, 
  InsuranceService, AuthenticationService} from '../services'
import { RouterModule, Router } from '@angular/router';
import { MockDoctorService } from '../mocks/mock-doctor-service'
import { MockAuthService } from '../mocks/mock-auth-service'
import { MockUserService } from '../mocks/mock-user-service'
import { Http, HttpModule } from '@angular/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StatModule } from '../shared';
import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, FormsModule, BrowserAnimationsModule ],
      declarations: [ RegistrationComponent ],
      providers: [
        { provide: DoctorService, useClass: MockDoctorService },
        { provide: HealthService, useClass: MockDoctorService },
        { provide: InsuranceService, useClass: MockDoctorService },
        { provide: HistoryService, useClass: MockDoctorService },
        { provide: AuthenticationService, useClass: MockAuthService },
        { provide: UserService, useClass: MockAuthService},
        { provide: Http }

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
