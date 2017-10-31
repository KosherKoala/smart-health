import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DoctorSearchPipe } from '../../shared/pipes/doctor-search.pipe';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatModule } from '../../shared';
import { DoctorService } from '../../services';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
        FormsModule
    ],
    declarations: [
        DashboardComponent,
        DoctorSearchPipe
    ],
    providers: [DoctorService]
})
export class DashboardModule { }
