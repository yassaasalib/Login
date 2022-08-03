import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) {}

  token: any = {};

  login(data: User):Observable<any>{
	var request = this.http.post(`${baseUrl}interview/backend/api/login`, data);
	request.subscribe(response  => {
		this.token = response;
	});
	return request;
  }

  offers():Observable<any>{
	const httpOptions = {
		headers: new HttpHeaders({
		//   Authorization: "Bearer f804dfbf-fff2-433d-8e2a-cf0095c74419"
		  Authorization: "Bearer" + " " + this.token.authToken
		})
	  };
	return this.http.get(`${baseUrl}interview/backend/api/offers`, httpOptions);
  }

  subscribtions(id: number): Observable<any>{
	const httpOptions = {
		headers: new HttpHeaders({
		  Authorization: "Bearer " + this.token.authToken
		})
	  };
	return this.http.get(`${baseUrl}interview/backend/api/offers/${id}/subscriptions`, httpOptions);
  }
}
