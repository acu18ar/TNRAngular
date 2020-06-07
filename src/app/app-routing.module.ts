import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {BuquesComponent} from './buques/buques.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'buques', component: BuquesComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
