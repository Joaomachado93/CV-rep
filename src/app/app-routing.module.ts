import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienceComponent } from './experience/experience.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
const routes: Routes = [
  { path: 'experience', component: ExperienceComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule,CommonModule,BrowserModule]
})
export class AppRoutingModule { }
