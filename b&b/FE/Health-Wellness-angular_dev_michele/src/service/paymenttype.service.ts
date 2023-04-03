import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PaymentTypeDTO } from "src/dto/paymenttypedto";
import { AbstractService } from './abstractservice';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class PaymentTypeService extends AbstractService<PaymentTypeDTO> {
    constructor(http: HttpClient) {
        super(http);
        this.type = 'paymenttype'; 
    }

}