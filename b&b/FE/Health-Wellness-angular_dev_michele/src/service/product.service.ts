import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductDTO } from "src/dto/productdto";
import { environment } from "../environments/environment";
import { AbstractService } from "./abstractservice";



@Injectable({
    providedIn: 'root'
})
export class ProductService extends AbstractService<ProductDTO>{

    constructor(http: HttpClient){
        super(http);
        this.type = 'products';
    }

    getAllByCenterId(id:number): Observable<any>{
        return this.http.get<any>(environment.APIEndpoint + this.type + `/list/user/not-${id}` );
    }

    getAllByAdminNot(id:number): Observable<any>{
        return this.http.get<any>(environment.APIEndpoint + this.type + `/list/admin/${id}` );
    }

    getAllByCartId(id:number): Observable<any>{
        return this.http.get<any>(environment.APIEndpoint + this.type + `/list/user/cart-${id}` );    
    }
}