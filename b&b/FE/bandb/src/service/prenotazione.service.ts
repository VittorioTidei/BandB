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

    public deleteUser(): Observable<any> {
        return this.http.delete(`${this.apiServerUrl}/prenotazione/delete?email=${this.usersharedservice.getEmail()}`);
    }

    public getPrenotazioneDate(): Observable<any> {
        return this.http.get<Prenotazione[]>(`${this.apiServerUrl}/prenotazione/getDate` );
    }

    public getAdminByEmail(): Observable<any> {
        return this.http.get<Boolean>(`${this.apiServerUrl}/prenotazione/getAdmin?email=${this.usersharedservice.getEmail()}` );
    }

    public addAdminByEmail(email:String): Observable<any> {
        return this.http.put<String>(`${this.apiServerUrl}/prenotazione/admin?email=${this.usersharedservice.getAdminEmail()}`, email );
    }

    public addPrenotazione(prenotazione: Prenotazione): Observable<any> {
        return this.http.post<Prenotazione>(`${this.apiServerUrl}/prenotazione/add`, prenotazione);
    }

}