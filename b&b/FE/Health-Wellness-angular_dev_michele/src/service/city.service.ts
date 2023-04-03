import { Injectable } from '@angular/core';
import { AbstractService } from './abstractservice';
import { UserDTO } from 'src/dto/userdto';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from 'src/dto/logindto';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { CityDTO } from 'src/dto/citydto';
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
export class CityService extends AbstractService<CityDTO>{

  constructor(http: HttpClient) {
    super(http);
    this.type = 'cities';
  }

  findByNameLike(name : string): Observable<CityDTO> {
    return this.http.post<any>(environment.APIEndpoint + this.type + '/findbyname/${name}', name)
  }

}
