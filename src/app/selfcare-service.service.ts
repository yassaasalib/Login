import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { Token } from './models/token';
// import { baseUrl } from 'src/environments/environment';
import { User } from './models/user';

@Injectable({
	providedIn: 'root'
})
export class SelfCareService {
	public token: string | null;

	constructor(private http: HttpClient, private router: Router) {
		this.token = localStorage.getItem("token");
	}

	private baseUrl: string = `https://selfcare-service.test.melita.com/interview/backend/api/`;

	public loginSubscribtion: Subscription = new Subscription;
	public logoutSubscribtion: Subscription = new Subscription;



	login(user: User): void {
		this.loginSubscribtion = this.http.post<Token>(this.baseUrl + "login", user).subscribe(response => {
			if (response.authToken) {
				localStorage.setItem("token", response.authToken);
				this.token = response.authToken;
				this.router.navigate(['./offers']);
			}
		});
	}

	logout(): void {
		this.logoutSubscribtion = this.http.get(this.baseUrl + "logout").subscribe(response => {
			if (response) {
				localStorage.removeItem("token");
				this.token = null;
				this.router.navigate(['./']);
			}
		});
	}

	offers(): Observable<any> {
		if(!this.token) this.router.navigate(['./']);
		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: "Bearer" + " " + this.token
			})
		};
		return this.http.get(this.baseUrl + "offers", httpOptions);
	}

	subscribtions(id: any): Observable<any> {
		if(!this.token) this.router.navigate(['./']);
		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: "Bearer " + this.token
			})
		};
		return this.http.get(this.baseUrl + `offers/${id}/subscriptions`, httpOptions);
	}

	ngOnDestroy(): void {
		this.loginSubscribtion.unsubscribe();
		this.logoutSubscribtion.unsubscribe();
	}
}

