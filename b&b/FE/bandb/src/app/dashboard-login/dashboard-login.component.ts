import { Component } from '@angular/core';
import { Prenotazione } from 'src/service/prenotazione';
import { PrenotazioneService } from 'src/service/prenotazione.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html',
  styleUrls: ['./dashboard-login.component.css']
})
export class DashboardLoginComponent implements OnInit{

  prenotazione: Prenotazione = new Prenotazione(); 
    prenotazioni: Prenotazione[];

    constructor(public PrenotazioneService: PrenotazioneService) {

    }

  ngOnInit(): void {
    
    this.PrenotazioneService.getPrenotazioneDate().subscribe(data => {
      this.prenotazioni = data;
    },error=>alert("No prenotation found!"))

  }

}
