import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Prenotazione } from "./prenotazione";
import { environment } from "src/enviroments/enviroment";

@Injectable({
    providedIn: 'root'
})

export class PrenotazioneService{
    private apiServerUrl = environment.APIEndpoint;


    constructor(private http: HttpClient){

    }

    public getPrenotazione(): Observable<Prenotazione> {
        return this.http.get<Prenotazione>(`${this.apiServerUrl}/prenotazione/`);
    }

    public addPrenotazione(prenotazione: Prenotazione): Observable<any> {
        return this.http.post<any>(`${this.apiServerUrl}/prenotazione`, prenotazione);
    }


}