import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Prenotazione } from "./prenotazione";
import { environment } from "src/environments/environment";
import { User } from "./user";
import { userShareService } from "./userShareSerive";

@Injectable({
    providedIn: 'root'
})



export class PrenotazioneService extends Prenotazione{
    private apiServerUrl = environment.APIEndpoint;
    public static user:User;

    constructor(private http: HttpClient, private usersharedservice: userShareService){
        super();
    }

    public getPrenotazioneEmail(): Observable<any> {
        return this.http.get<Prenotazione[]>(`${this.apiServerUrl}/prenotazione/getData?email=${this.usersharedservice.getEmail()}`);
    }

    public getPrenotazioneDate(): Observable<any> {
        return this.http.get<Prenotazione[]>(`${this.apiServerUrl}/prenotazione/getDate` );
    }

    public addPrenotazione(prenotazione: Prenotazione): Observable<any> {
        return this.http.post<Prenotazione>(`${this.apiServerUrl}/prenotazione/add`, prenotazione);
    }

}