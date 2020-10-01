import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {MaterialModule} from '../material/material.module';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class UserModule { }
