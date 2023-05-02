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
export class PrenotazioneComponent implements OnInit {
  
  form:FormGroup;
  prenotazione: Prenotazione = new Prenotazione();
  prenotazioni: Prenotazione[];
  
  //
  hoveredDate: NgbDate | null = null;
	fromDate: NgbDate;
	toDate: NgbDate | null = null;
  //

  //num = document.getElementById('num') as HTMLInputElement | null;
  

   constructor(public fb:FormBuilder, private http: HttpClient, public PrenotazioneService: PrenotazioneService, calendar: NgbCalendar){

    this.form=fb.group({
      'nome': ['Nome', Validators.required],
      'cognome': ['Cognome', Validators.required],
      'email': ['Email', Validators.required],
      'telefono': ['Telefono', Validators.required],
      'data_inizio': ['', Validators.required],
      'data_fine': ['', Validators.required],
      'ospiti': ['1', Validators.required]
    })

    this.PrenotazioneService.getPrenotazione().subscribe(data => {
      this.prenotazioni = data;
      console.log(this.prenotazioni);
    });


    this.fromDate = calendar.getToday();
		this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

    this.form.valueChanges.subscribe(console.log)

   }

   ngOnInit(): void {
    /*this.PrenotazioneService.getPrenotazione().subscribe(data => {
      this.prenotazioni = data;
      console.log(this.prenotazioni);
    });*/
   }


   onDateSelection(date: NgbDate) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
	}

	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}

  isDisabled(date: NgbDateStruct){
    /*const d = new Date(date.year, date.month -1, date.day);
    var prenotazioni: Prenotazione[];
    this.PrenotazioneService.getPrenotazione().subscribe(data => {
      prenotazioni = data;
      console.log(prenotazioni);
    });*/
    //return this.prenotazioni.some(disabled);
    return true;
    //return this.checkIfDisabled(date);
  }

  checkIfDisabled(date: NgbDateStruct){
    const d = new Date(date.year, date.month -1, date.day);
    var prenotazioni: Prenotazione[];
    this.PrenotazioneService.getPrenotazione().subscribe(data => {
      prenotazioni = data;
      console.log(prenotazioni);
    });
    return true;
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
    /*this.form.get("data_inizio").setValue(new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day + 1));
    this.form.get("data_fine").setValue(new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day + 1));*/
    this.prenotazione = this.form.value;
    this.prenotazione.data_inizio = new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day + 1);
    this.prenotazione.data_fine = new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day + 1);
    this.prenotazione.camera = 102;
    this.PrenotazioneService.addPrenotazione(this.prenotazione).subscribe()
    /*if(!this.form.valid){
      alert("Compila coglione!")
      return;
    }*/
  }
}
