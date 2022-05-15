import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  { path: 'experience', component: ExperienceComponent },
  { path: 'home', component: HomeComponent },
]; 

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SliderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
