import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private loginServiceService: LoginServiceService) {
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
			if(result.success){
				console.log(result)
				alert(result.message)
			} else {
				alert(result.message)
			}
		})
	}
  }
}
