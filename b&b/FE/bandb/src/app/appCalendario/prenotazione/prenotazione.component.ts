import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent {
  
  private a = 1;

  decrement(){
    const num = document.getElementById('num') as HTMLInputElement | null;
    
    


    if(this.a > 1){
      this.a--;
      num.innerHTML = this.a.toString();

    }
    
  }

  increment(){
    const num = document.getElementById('num') as HTMLInputElement | null;
  
    if(this.a < 3){
      this.a++;
      num.innerHTML = this.a.toString();

    }
    
  }
  

  nSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
