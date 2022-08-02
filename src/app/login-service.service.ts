import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }
  login(data: any):Observable<any>{
	console.log('I am server')
	return this.http.post(`${baseUrl}interview/backend/api/login`, data)
  }
}
