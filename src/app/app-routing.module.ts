import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginV2Component } from './login-v2/login-v2.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginV2Component},
  {path:'signup', component: SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, LoginV2Component, SignupComponent]
