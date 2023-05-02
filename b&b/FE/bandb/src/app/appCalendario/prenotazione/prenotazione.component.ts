import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PrenotazioneService } from 'src/service/prenotazione.service';
import { Prenotazione } from 'src/service/prenotazione';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent {

   num = document.getElementById('num') as HTMLInputElement | null;
   form:FormGroup;
   
   prenotazione: Prenotazione = new Prenotazione();
   

   constructor(public fb:FormBuilder, private http: HttpClient, public PrenotazioneService: PrenotazioneService){

    

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
