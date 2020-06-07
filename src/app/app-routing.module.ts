import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {BuquesComponent} from './buques/buques.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {AddComponent} from './usuarios/add/add.component';
import {AddbuquesComponent} from './buques/addbuques/addbuques.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'buques', component: BuquesComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/add', component: AddComponent },
  { path: 'buques/add', component: AddbuquesComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
