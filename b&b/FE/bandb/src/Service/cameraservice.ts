import { Injectable } from '@angular/core';
import { AbstractService } from './abstractservice';
import { HttpClient } from '@angular/common/http';
import { CameraDTO } from 'src/DTO/cameraDTO';/**
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
export class CameraService extends AbstractService<CameraDTO>{

  constructor(http: HttpClient) {
    super(http);
    this.type = 'cameras';
  }

}