import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorSearchPipe } from './doctor-search.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [DoctorSearchPipe]
})
export class SharedPipesModule { }
