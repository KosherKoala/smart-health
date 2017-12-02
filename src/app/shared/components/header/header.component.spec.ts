import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import {AuthenticationService, UserService, DoctorService, CalendarService, HistoryService, PatientService} from '../../../services'
import { HeaderComponent } from './header.component';
import { Http, HttpModule } from '@angular/http';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule,
        TranslateModule.forRoot(),
        HttpModule
      ],
      declarations: [ HeaderComponent ],
      providers: [AuthenticationService, UserService, HistoryService, DoctorService, PatientService, CalendarService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
