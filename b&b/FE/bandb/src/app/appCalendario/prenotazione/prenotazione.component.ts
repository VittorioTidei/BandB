import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent {

   num = document.getElementById('num') as HTMLInputElement | null;
   form:FormGroup;
   

   constructor(public fb:FormBuilder, private http: HttpClient){

    

    this.form=fb.group({
      'nome': ['Nome', Validators.required],
      'cognome': ['Cognome', Validators.required],
      'email': ['Email', Validators.required],
      'tel': ['Telefono', Validators.required],
      'data_a': ['', Validators.required],
      'data_p': ['', Validators.required],
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
  

  send() {
    const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json'}  
    const SERVER_URL = "http://localhost:8080/api/v1/prenotazione";
    if(!this.form.valid){
      //alert("Compila coglione!")
      //return;
    }


    var formData: any = new FormData();
    //formData.append("camera", 101)
    /*formData.append("nome", this.form.get('nome').value)
    formData.append("cognome", this.form.get('cognome').value)
    formData.append("email", this.form.get('email').value)
    formData.append("tel", this.form.get('tel').value)
    formData.append("data_inizio", this.form.get('data_a').value)
    formData.append("data_fine", this.form.get('data_p').value)
    formData.append("ospiti", this.form.get('ospiti').value)*/
    //console.log(JSON.stringify(formData))
    //this.http.post(SERVER_URL, JSON.stringify(formData), {'headers':headers})

  }
}
