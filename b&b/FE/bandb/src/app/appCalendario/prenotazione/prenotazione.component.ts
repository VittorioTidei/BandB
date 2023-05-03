import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PrenotazioneService } from 'src/service/prenotazione.service';
import { Prenotazione } from 'src/service/prenotazione';


@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit{
  
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


  ngOnInit(): void {

    this.PrenotazioneService.getPrenotazione().subscribe(data => {
      this.prenotazioni = data;
    });
     
   }

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

  isBefore(date1: Date, date2: Date) {
    return date1 <= date2;
  }
  
  isAfter(date1: Date, date2: Date) {
    return date1 >= date2;
  }

  isInRange(date_I: Date, date: Date, date_F: Date){
    return (this.isAfter(date, date_I) && this.isBefore(date, date_F));
  }


  myFilter = (d: Date): boolean => {
    /*
      TRUE - DISPONIBILE
      FALSE - DISABILITATA
    */
    var filtered: boolean;
    var checked: boolean = false;
    d = new Date(d);

    this.prenotazioni.forEach(element => {
      var data_I = new Date(element.data_inizio);
      var data_F = new Date(element.data_fine);
      if(!checked){
        if(this.isInRange(data_I, d, data_F)){
          checked = true;
          filtered = false;
        } else {
          filtered = true;
        }
      }
    });
    
    return filtered;
  }

  send(){
    this.prenotazione = this.form.value;
    this.prenotazione.camera = 102;
    this.PrenotazioneService.addPrenotazione(this.prenotazione).subscribe();

  }
}
