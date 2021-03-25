import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../Components/header/header.component';
import { HerosectoinComponent } from '../Components/herosectoin/herosectoin.component';
import { CategoriesComponent } from '../Components/categories/categories.component';
import {FooterComponent} from '../Components/footer/footer.component';
import {TopCoursesComponent} from '../Components/top-courses/top-courses.component'
import {TopInstructorsComponent} from '../Components/top-instructors/top-instructors.component';
import { CategoryCardComponent } from '../Components/category-card/category-card.component';
import { LoginComponent } from '../Components/login/login.component';
import { SignUpComponent } from '../Components/sign-up/sign-up.component';
import { HomePageComponent } from '../Components/home-page/home-page.component'

@NgModule({
  declarations: [AppComponent,
     HeaderComponent, 
     HerosectoinComponent, 
     CategoriesComponent, 
     FooterComponent,
     TopCoursesComponent, 
     TopInstructorsComponent, 
     CategoryCardComponent, 
     LoginComponent, SignUpComponent, HomePageComponent  ],
     
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
