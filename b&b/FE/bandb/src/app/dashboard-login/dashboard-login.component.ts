import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Prenotazione } from 'src/service/prenotazione';
import { PrenotazioneService } from 'src/service/prenotazione.service';
import { OnInit } from '@angular/core';
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
    emailAdmin: string;
    isAdmin: Boolean 

    constructor(public PrenotazioneService: PrenotazioneService,private router: Router, private usershareservice: userShareService,private renderer:Renderer2,
      private el:ElementRef) {
    }

  ngOnInit(): void {
    this.PrenotazioneService.getPrenotazioneEmail().subscribe(data => {
      this.prenotazioni = data;
      this.email = this.usershareservice.getEmail();
    })

    this.PrenotazioneService.getAdminByEmail().subscribe(data => {
      this.isAdmin = data;
      if(data==true){
        const input = this.renderer.createElement('input');
        this.renderer.appendChild(this.el.nativeElement, input);
      const button = this.renderer.createElement('button');
      const buttonText = this.renderer.createText('Inserisci email da rendere admin');
      this.renderer.appendChild(button, buttonText);
      this.renderer.appendChild(this.el.nativeElement, button);
      this.renderer.listen(button, 'click', () => {
        this.emailAdmin=(input as unknown as HTMLInputElement).value;
        this.usershareservice.setAdminEmail(this.emailAdmin);
        this.PrenotazioneService.addAdminByEmail(this.emailAdmin).subscribe(data => {
        alert("Account now is a Admin!");
        },error=>alert("Error"))
        
      });
      }
    })

  }

  adminFromEmail(email:String){

  }

  deleteUser(){
    this.PrenotazioneService.deleteUser().subscribe(data => {
      alert("Account deleted!");
      this.router.navigate(['']);
    },error=>alert("Can't delete account!"))
  }

}
