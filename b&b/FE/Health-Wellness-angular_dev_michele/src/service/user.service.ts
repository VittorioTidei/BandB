import { Injectable } from '@angular/core';
import { AbstractService } from './abstractservice';
import { UserDTO } from 'src/dto/userdto';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import { LoginDTO } from 'src/dto/logindto';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

/**
 * I service sono decorati da @Injectable. 
 * Qui trovate, oltre ai metodi ereditati dall'Abstract,
 *  il metodo per il login (in mirror con il backend).
 * 
 * @author Vittorio Valent
 * 
 * @see AbstractService
 */
@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractService<UserDTO>{

  constructor(http: HttpClient) {
    super(http);
    this.type = 'user';
  }

  login(loginDTO: LoginDTO): Observable<any> {
    return this.http.post<any>(environment.APIEndpoint + this.type + '/login', loginDTO, {observe: "response"})
  }

  list(): Observable<Array<UserDTO>> {
    return this.http.get<any>(environment.APIEndpoint + this.type + '/list', {});
  }

  //uploadCloud function
  uploadImage(file: File): Observable<any> {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', 'http://localhost:8080/users/uploadimg', data, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(newRequest);
  }




}
