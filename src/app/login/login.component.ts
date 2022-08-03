import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private loginServiceService: LoginServiceService, private router: Router) {
	this.form = new FormGroup({
		email: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required])
	})
  }
	form: FormGroup;

  ngOnInit() {}
  LoginProces(){
	if(this.form.valid){
		this.loginServiceService.login(this.form.value).subscribe(result => {
			// this.router.navigate(['./offers']);
			if(result.authToken){

				// save the token in cookie or localstorage
				this.router.navigate(['./offers']);

				// alert(result.authToken)

			}
			//  else {
			// 	alert(result.authToken)
			// }
		})
	}
  }
}
