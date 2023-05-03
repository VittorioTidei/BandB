import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PrenotazioneService } from 'src/service/prenotazione.service';
import { Prenotazione } from 'src/service/prenotazione';
import { NgbDate, NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent {
  
  form:FormGroup;
  prenotazione: Prenotazione = new Prenotazione();
  prenotazioni: Prenotazione[];

   constructor(public fb:FormBuilder, private http: HttpClient, public PrenotazioneService: PrenotazioneService,){

    this.form=fb.group({
      'nome': ['Nome', Validators.required],
      'cognome': ['Cognome', Validators.required],
      'email': ['Email', Validators.required],
      'telefono': ['Telefono', Validators.required],
      'data_inizio': ['', Validators.required],
      'data_fine': ['', Validators.required],
      'ospiti': ['1', Validators.required]
    })

    this.form.valueChanges.subscribe(console.log)

   }




   

  /*checkIfDisabled(date: NgbDateStruct){
    const d = new Date(date.year, date.month -1, date.day);
    var prenotazioni: Prenotazione[];
    this.PrenotazioneService.getPrenotazione().subscribe(data => {
      prenotazioni = data;
      console.log(prenotazioni);
    });
    return true;
  }*/


  decrement(){
    const num = document.getElementById('num') as HTMLInputElement | null;
    
    if(num.valueAsNumber > 1){
      num.valueAsNumber--;
      this.form.get("ospiti").setValue(num.valueAsNumber);

    }
    
  }

  increment(){
    const num = document.getElementById('num') as HTMLInputElement | null;
  
    if(num.valueAsNumber < 3){
      num.valueAsNumber++;
      this.form.get("ospiti").setValue(num.valueAsNumber);

    }
    
  }
  
  formatDateI() {
    var date = new Date(`${this.form.value.data_inizio} UTC`);
    return date.toString();
  }

  send(){
    this.prenotazione = this.form.value;
    this.prenotazione.camera = 102;
    this.PrenotazioneService.addPrenotazione(this.prenotazione).subscribe()
    /*if(!this.form.valid){
      alert("Compila coglione!")
      return;
    }*/
  }
}
