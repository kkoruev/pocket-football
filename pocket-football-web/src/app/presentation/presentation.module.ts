import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderModule} from './header/header.module';
import {MaterialModule} from './material/material.module';
import {EventModule} from './event/event.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderModule,
    EventModule
  ]
})
export class PresentationModule { }
