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
      'nome': ['', Validators.required],
      'cognome': ['', Validators.required],
      'email': ['', Validators.required],
      'telefono': ['', Validators.pattern("^((\\+[0-9]{2}-?)|0)?[0-9]{10}$")],
      'camera': ['101', Validators.required],
      'data_inizio': ['', Validators.required],
      'data_fine': ['', Validators.required],
      'ospiti': ['1', Validators.required]
    })

    this.form.controls['telefono'].addValidators(Validators.required);
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
    var filtered: boolean = true;
    var checked: boolean = false;
    var camera = this.form.controls['camera'].value;

    this.prenotazioni.forEach(element => {
      if(camera == element.camera){
        if(!checked){
         if(this.isInRange(new Date(element.data_inizio), d, new Date(element.data_fine))){
           checked = true;
            filtered = false;
          } else {
          filtered = true;
          }
        }
      }
    });
    
    if(this.isBefore(d, new Date())){
      filtered = false;
    }

    return filtered;
  }

  send(){
    this.prenotazione = this.form.value;
    this.PrenotazioneService.addPrenotazione(this.prenotazione).subscribe();

  }
}
