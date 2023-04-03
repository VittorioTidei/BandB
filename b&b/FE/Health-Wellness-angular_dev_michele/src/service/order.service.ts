import { Injectable } from '@angular/core';
import { AbstractService } from './abstractservice';
import { UserDTO } from 'src/dto/userdto';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from 'src/dto/logindto';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { OrderDTO } from 'src/dto/orderdto';
import { ProductOrderListDTO } from 'src/dto/productOrderListdto';
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
export class OrderService extends AbstractService<OrderDTO>{

  constructor(http: HttpClient) {
    super(http);
    this.type = 'orders';
  }

  getAllByUserId(id : number): Observable<OrderDTO[]> {
    return this.http.get<any>(environment.APIEndpoint + this.type + `/getall/user/${id}`)
  }

  getAllByOrderId(id:number) :Observable<ProductOrderListDTO[]> {
    return this.http.get<any>(environment.APIEndpoint + this.type +`/getall/productorderlist/${id}`)
  }

  convert(userId : number, centerId: number, paymentId : number, cartId : number ): Observable<any> {
    return this.http.post<any>(environment.APIEndpoint + this.type + `/convert?userId=${userId}&centerId=${centerId}&paymentId=${paymentId}&cartId=${cartId}`,{})
  }
  


}
