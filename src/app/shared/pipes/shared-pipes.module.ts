import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorSearchPipe } from './doctor-search.pipe';
import { ChatPipePipe } from './chat-pipe.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [DoctorSearchPipe, ChatPipePipe]
})
export class SharedPipesModule { }
