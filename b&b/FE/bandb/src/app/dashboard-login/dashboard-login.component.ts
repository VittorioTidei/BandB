import { Component } from '@angular/core';
import { Prenotazione } from 'src/service/prenotazione';
import { PrenotazioneService } from 'src/service/prenotazione.service';
import { OnInit } from '@angular/core';
import { UserLoginComponent } from "../user-login/user-login.component"
import { userShareService } from 'src/service/userShareSerive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html',
  styleUrls: ['./dashboard-login.component.css']
})
export class DashboardLoginComponent implements OnInit {

  prenotazione: Prenotazione = new Prenotazione(); 
    prenotazioni: Prenotazione[];
    email: String;

    constructor(public PrenotazioneService: PrenotazioneService,private router: Router, private usershareservice: userShareService) {
    }

  ngOnInit(): void {
    this.PrenotazioneService.getPrenotazioneEmail().subscribe(data => {
      this.prenotazioni = data;
      this.email = this.usershareservice.getEmail();
    })

  }

  deleteUser(){
    this.PrenotazioneService.deleteUser().subscribe(data => {
      alert("Account deleted!");
      this.router.navigate(['']);
    },error=>alert("Can't delete account!"))
  }

}
