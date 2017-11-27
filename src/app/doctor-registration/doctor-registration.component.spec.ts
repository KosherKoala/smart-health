import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service'

import { DoctorRegistrationComponent } from './doctor-registration.component';

describe('DoctorRegistrationComponent', () => {
  let component: DoctorRegistrationComponent;
  let fixture: ComponentFixture<DoctorRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, FormsModule ],
      declarations: [ DoctorRegistrationComponent ],
      providers: [
        { provide: UserService},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
