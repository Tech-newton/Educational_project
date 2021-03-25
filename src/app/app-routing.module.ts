import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from 'src/Components/home-page/home-page.component';
import { LoginComponent } from 'src/Components/login/login.component';
import { SignUpComponent } from 'src/Components/sign-up/sign-up.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'', component:HomePageComponent},
    {path:'login', component:LoginComponent},
    {path:'login/signUp', component:SignUpComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
