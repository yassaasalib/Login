import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SelfCareService } from './selfcare-service.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./_index.sass']
})
export class AppComponent {
	title = 'new-login';
	loggedIn: boolean = false;

	constructor(private router: Router, private service: SelfCareService) {
		router.events.subscribe((val) => {
			this.loggedIn = service.token != undefined;
		});
	}

	LogOutProcess(): void {
		this.service.logout();
	}
}
