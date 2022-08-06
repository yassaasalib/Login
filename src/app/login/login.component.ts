import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelfCareService } from '../selfcare-service.service';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	// styleUrls: ['./login.component.sass']
	styleUrls: ['../_index.sass']
})
export class LoginComponent implements OnInit {
	clicked = false;
	hide = true;
	get passwordInput() { return this.form.get('password'); }
	constructor(private selfCareService: SelfCareService) {
		this.form = new FormGroup({
			email: new FormControl('', [Validators.required]),
			password: new FormControl('', [Validators.required, Validators.min(3) ])
		});
	}
	form: FormGroup;

	ngOnInit() { }

	@ViewChild('loginbutton')
	loginButton!: ElementRef;

	LoginProces() {
		if (this.form.valid) {
			this.selfCareService.login(this.form.value);
		}
		this.clicked = false;
	}
}
