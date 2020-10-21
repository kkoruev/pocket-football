import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {MaterialModule} from '../material/material.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [ProfileComponent, HomeComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ProfileComponent,
    HomeComponent
  ]
})
export class UserModule { }
