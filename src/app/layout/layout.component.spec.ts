import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import {DoctorService, CalendarService, UserService, AppointmentService, AuthenticationService} from '../services';
import { MockDoctorService } from '../mocks/mock-doctor-service'
import { MockAuthService } from '../mocks/mock-auth-service'
import { HeaderComponent, SidebarComponent } from '../shared';
import { LayoutComponent } from './layout.component';

import { Http, HttpModule } from '@angular/http';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      NgbDropdownModule.forRoot(),
      TranslateModule.forRoot(),
    ],
      declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
      ],
      providers: [
        { provide: DoctorService, useClass: MockDoctorService },
        { provide: CalendarService, useClass: MockDoctorService },
        { provide: AppointmentService, useClass: MockDoctorService },
        { provide: AuthenticationService, useClass: MockAuthService },
        { provide: UserService, useClass: MockAuthService},
        { provide: Http }

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
