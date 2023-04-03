import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CartDTO } from "src/dto/cartdto";
import { environment } from "src/environments/environment";
import { AbstractService } from "./abstractservice";

@Injectable({
    providedIn: 'root'
})
export class CartService extends AbstractService<CartDTO>{
    constructor(http: HttpClient){
        super(http);
        this.type = 'carts';
    }

    read(userId:number): Observable<any>{
        return this.http.get<any>(environment.APIEndpoint + this.type + `/read/${userId}` );
    }

    updateProductInCart(cartId: number, productId: number, qty:number): Observable<any>{
        return this.http.post<any>(environment.APIEndpoint + this.type + `/updateproduct/${cartId}/${productId}/${qty}`, cartId);
    }

    removeProductInCart(id:number): Observable<any>{
        return this.http.delete<any>(environment.APIEndpoint + this.type + `/deleteproductincart/${id}` );
    }

}