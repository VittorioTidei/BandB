import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CenterDTO } from "src/dto/centerdto";
import { AbstractService } from './abstractservice';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class CenterService extends AbstractService<CenterDTO> {
    constructor(http: HttpClient) {
        super(http);
        this.type = 'centers'; 
    }

    getAllByUserId(id:number): Observable<Array<CenterDTO>> {
        return this.http.get<any>(environment.APIEndpoint + this.type + `/getallbyadmin/${id}`);
    }

    getAllByUserIdNot(centersByUserIdNot: Array<CenterDTO>): Observable<Array<CenterDTO>> {
        return this.http.get<any>(environment.APIEndpoint + this.type + `/getallbyadminNot/${centersByUserIdNot}`);
    }
}