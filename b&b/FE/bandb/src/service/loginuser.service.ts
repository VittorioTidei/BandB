import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from "./user"
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginuserService extends User{
  private apiServerUrl = environment.APIEndpoint;

  constructor(private httpClient: HttpClient) {
    super();
   }

  loginUser(user: User): Observable<any>{
    console.log(user)
    return this.httpClient.post<User>(`${this.apiServerUrl}/auth/token`, user);
  }
}
