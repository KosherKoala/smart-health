import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarModule } from 'angular-calendar';
import { DoctorPageComponent } from './doctor-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component'
import {DoctorService, CalendarService, AppointmentService, AuthenticationService} from '../../services'

import { RouterModule, Router } from '@angular/router';
import { MockDoctorService } from '../../mocks/mock-doctor-service'
import { MockAuthService } from '../../mocks/mock-auth-service'
import { Http, HttpModule } from '@angular/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('DoctorPageComponent', () => {
  let component: DoctorPageComponent;
  let fixture: ComponentFixture<DoctorPageComponent>;
  const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
    },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: 'registration', loadChildren: './registration/registration.module#RegistrationModule' },
    { path: 'doctor-registration', loadChildren: './doctor-registration/doctor-registration.module#DoctorRegistrationModule' },
    { path: '**', redirectTo: 'not-found' }
];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorPageComponent, CalendarHeaderComponent  ],
      imports: [BrowserAnimationsModule,
                NgbModule.forRoot(),
                CalendarModule.forRoot(),
                RouterTestingModule.withRoutes(routes)],
      providers: [
        { provide: DoctorService, useClass: MockDoctorService },
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
    fixture = TestBed.createComponent(DoctorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
