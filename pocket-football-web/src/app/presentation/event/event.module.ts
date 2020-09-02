import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMatchComponent } from './my-match/my-match.component';
import {MaterialModule} from '../material/material.module';



@NgModule({
  declarations: [MyMatchComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [MyMatchComponent]
})
export class EventModule { }
