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

  constructor(private http:HttpClient, private router: Router) {}

  private baseUrl: string = `https://selfcare-service.test.melita.com/interview/backend/api/`

  public token: any;

  public loginSubscribtion: Subscription = new Subscription;

  login(data: User):void{
    this.loginSubscribtion = this.http.post(this.baseUrl + "login", data).subscribe(response  => {
		this.token = response;
		if(this.token.authToken){
			this.router.navigate(['./offers']);
		}
	});
  }

  offers():Observable<any>{
    const httpOptions = {
        headers: new HttpHeaders({
        //   Authorization: "Bearer 9dc037eb-a380-41d5-bad3-aed30adfc414"
          Authorization: "Bearer" + " " + this.token.authToken
        })
      };
    return this.http.get(this.baseUrl + "offers", httpOptions);
  }

  subscribtions(id: number): Observable<any>{
    const httpOptions = {
        headers: new HttpHeaders({
          Authorization: "Bearer " + this.token.authToken
        })
      };
    return this.http.get(this.baseUrl + `offers/${id}/subscriptions`, httpOptions);
	}

	ngOnDestroy(): void {
		this.loginSubscribtion.unsubscribe();
	}
}

