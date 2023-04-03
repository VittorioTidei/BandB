import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TreatmentDTO } from "src/dto/treatmentdto";
import { AbstractService } from "./abstractservice";


@Injectable({
    providedIn: 'root'
})
export class TreatmentService extends AbstractService<TreatmentDTO>{
    constructor(http: HttpClient){
        super(http);
        this.type = 'treatment';
    }

    
}