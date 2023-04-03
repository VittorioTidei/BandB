import { Injectable } from '@angular/core';
import { AbstractService } from './abstractservice';
import { HttpClient } from '@angular/common/http';
import { calendarioDTO } from 'src/DTO/calendarioDTO';/**
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
export class CalendarioService extends AbstractService<calendarioDTO>{

  constructor(http: HttpClient) {
    super(http);
    this.type = 'calndarios';
  }

}