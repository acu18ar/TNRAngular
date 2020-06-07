import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BuquesComponent } from './buques/buques.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AddComponent } from './usuarios/add/add.component';
import { AddbuquesComponent } from './buques/addbuques/addbuques.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuquesComponent,
    UsuariosComponent,
    AddComponent,
    AddbuquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
