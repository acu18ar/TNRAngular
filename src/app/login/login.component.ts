import { Component, OnInit } from '@angular/core';
import {CaptchaService} from '../service/captcha.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CaptchaService]
})


export class LoginComponent implements OnInit {
  cargando = false;
  singInForm: FormGroup;

  captcha = {};

  constructor(private captchaService: CaptchaService,
    private formBuilder: FormBuilder,
    private router: Router ) { }
  resolved(captchaResponse: string, res) {
    console.log(`Resolved response token: ${captchaResponse}`);
  }

  ngOnInit(): void {
    this.loadCaptcha();
    this.cargando = false;
    this.singInForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      recaptchaReactive: ['', Validators.required]
    });
  }
  private loadCaptcha(): void{
    this.captchaService.getCaptcha().subscribe(data => {
      console.log(data);
      this.captcha = data.body;
      this.cargando = true;
    });
  }
  get f() {
    return this.singInForm.controls;
  }

  signin(){
    if (this.singInForm.invalid) {
      console.log('formulario invalido.');
    } else {
    }
  }

}

