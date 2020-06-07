import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


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
    AppRoutingModule,
    HttpClientModule,
    RecaptchaModule,  // this is the recaptcha main module
    RecaptchaFormsModule, // this is the module for form incase form validation
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
