import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent, AuthGuard, HistoryGuard, DoctorGuard, PatientGuard  } from '../shared';
import {  PatientService, DoctorService, UserService, AuthenticationService } from '../services';

import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        TranslateModule,
        FormsModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
    ],
    providers: [AuthGuard, DoctorGuard, PatientGuard, HistoryGuard, AuthenticationService, PatientService, DoctorService, UserService]
})
export class LayoutModule { }
