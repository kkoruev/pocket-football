import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {MaterialModule} from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [ProfileComponent, HomeComponent, RegisterComponent],
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
