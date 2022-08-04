import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { baseUrl } from 'src/environments/environment';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) {}

  private baseUrl: string = `https://selfcare-service.test.melita.com/interview/backend/api/`

  token: any
  authToken: any

  login(data: User):Observable<any>{
	// var request = this.http.post(`${baseUrl}login`, data);
	var request = this.http.post(this.baseUrl + "login", data);
	request.subscribe(response  => { this.token = response });
	return request;
  }

  offers():Observable<any>{
	const httpOptions = {
		headers: new HttpHeaders({
		//   Authorization: "Bearer f804dfbf-fff2-433d-8e2a-cf0095c74419"
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
}
