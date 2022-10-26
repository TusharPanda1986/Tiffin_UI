import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private baseURL = "http://localhost:8080/user";

  constructor(private httpClient: HttpClient) { }

  authenticateLogin(userName: String, password: String): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.baseURL}/${userName}/${password}`);
  }

}
