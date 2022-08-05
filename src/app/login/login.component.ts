import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelfCareService } from '../selfcare-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private selfCareService: SelfCareService) {
	this.form = new FormGroup({
		email: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required])
	})
  }
	form: FormGroup;

  ngOnInit() {}
  LoginProces(){
	if(this.form.valid){
		this.selfCareService.login(this.form.value);
	}
  }
}
