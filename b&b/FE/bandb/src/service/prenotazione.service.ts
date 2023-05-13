import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Prenotazione } from "./prenotazione";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class PrenotazioneService extends Prenotazione{
    private apiServerUrl = environment.APIEndpoint;


    constructor(private http: HttpClient){
        super();
    }

    public getPrenotazione(): Observable<any> {
        return this.http.get<Prenotazione[]>(`${this.apiServerUrl}/prenotazione/get`);
    }

    public addPrenotazione(prenotazione: Prenotazione): Observable<any> {
        return this.http.post<Prenotazione>(`${this.apiServerUrl}/prenotazione/add`, prenotazione);
    }


}