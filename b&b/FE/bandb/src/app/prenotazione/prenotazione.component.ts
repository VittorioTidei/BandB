import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrenotazioneService } from 'src/service/prenotazione.service';
import { Prenotazione } from 'src/service/prenotazione';
import { environment } from 'src/environments/environment';

declare var paypal;

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})

export class PrenotazioneComponent implements OnInit{
  
  //Formgroup per la prenotazione
  form:FormGroup; 

  //Prenotazione dove salvare dati del FormGroup
  prenotazione: Prenotazione = new Prenotazione(); 

  //Array di prenotazioni per il datepicker
  prenotazioni: Prenotazione[];

  //Stato della prenotazione (0 - Form, 1 - Riepilogo, 2 - Paypal, 3 - Pagamento con successo)
  prenotaState: number = 0;

  //Numero di giorni del soggiorno
  numGiorni: number;

  //Prezzo camera in environment
  roomPrice: number = environment.roomPrice;

  //Date di inizio e fine soggiorno per il riepilogo
  dataInizio: string;
  dataFine: string;

  @ViewChild('paypal', {static: true}) paymentElement : ElementRef;


  constructor(public fb: FormBuilder, public PrenotazioneService: PrenotazioneService) {

    this.form = fb.group({
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

  }

  ngOnInit(): void {

    this.PrenotazioneService.getPrenotazioneDate().subscribe(data => {
      this.prenotazioni = data;
    });

  }

  /**
   * Pulsante Ospiti
   */
  decrement() {
    const num = document.getElementById('num') as HTMLInputElement | null;

    if (num.valueAsNumber > 1) {
      num.valueAsNumber--;
      this.form.get("ospiti").setValue(num.valueAsNumber);

    }

  }
  increment() {
    const num = document.getElementById('num') as HTMLInputElement | null;

    if (num.valueAsNumber < 3 && this.form.get("camera").value != 102) {
      num.valueAsNumber++;
      this.form.get("ospiti").setValue(num.valueAsNumber);
    } else if (num.valueAsNumber < 2) {
      num.valueAsNumber++;
      this.form.get("ospiti").setValue(num.valueAsNumber);
    }

  }

  /**
   * Funzioni controllo date
   */
  isBefore(date1: Date, date2: Date) {
    return date1 <= date2;
  }

  isAfter(date1: Date, date2: Date) {
    return date1 >= date2;
  }

  isInRange(date_I: Date, date: Date, date_F: Date) {
    return (this.isAfter(date, date_I) && this.isBefore(date, date_F));
  }

  /**
   * Filtro per le date non disponibili
   */
  myFilter = (d: Date): boolean => {

    //TRUE - DISPONIBILE
    //FALSE - DISABILITATA

    var filtered: boolean = true;
    var checked: boolean = false;
    var camera = this.form.controls['camera'].value;

    this.prenotazioni.forEach(element => {
      //Se la camera scelta combacia la camera della prenotazione che prendo in considerazione
      if (camera == element.camera) {
        if (!checked) {
          //Se la data da filtrare è nel range della prenotazione la disabilito
          if (this.isInRange(new Date(element.data_inizio), d, new Date(element.data_fine))) {
            checked = true;
            filtered = false;
          } else {
            filtered = true;
          }
        }
      }
    });

    //Blocco tutte le date passate
    if (this.isBefore(d, new Date())) {
      filtered = false;
    }

    return filtered;
  }

  /**
   * Funzione di controllo overlap delle date scelte nel datepicker con le prenotazioni
   * rimuove la possibilità di effettuare una prenotazione su giorni già prenotati
   * ex: Esiste una prenotazione dal 20 al 25, blocco la possibilità di prenotare dal 19 al 26
   */
  checkOverlap() {
    const num = document.getElementById('num') as HTMLInputElement | null;
    this.form.controls['data_inizio'].setErrors(null);
    this.form.controls['data_fine'].setErrors(null);

    //Se scelgo la camera 102, blocco gli ospiti max a 2
    if (num.valueAsNumber > 2 && this.form.get("camera").value == 102) {
      num.valueAsNumber = 1;
    }

    this.prenotazioni.forEach(element => {
      if (this.form.controls['camera'].value == element.camera) {
        //Se esiste una prenotazione con data di inizio in mezzo alle date scelte rendo i form invalidi
        if (this.isInRange(new Date(this.form.get("data_inizio").value), new Date(element.data_inizio), new Date(this.form.get("data_fine").value))) {
          this.form.controls['data_inizio'].setErrors({ 'incorrect': true });
          this.form.controls['data_fine'].setErrors({ 'incorrect': true });
        }
      }
    });
  }

  //Salvo i valori inseriti dall'utente e mostro il riepilogo
  proceed() {
    this.prenotazione = this.form.value;
    this.dataInizio = this.prenotazione.data_inizio.toISOString().slice(0, 10);
    this.dataFine = this.prenotazione.data_fine.toISOString().slice(0, 10);
    this.numGiorni = Math.ceil(Math.abs(this.prenotazione.data_inizio.valueOf() - this.prenotazione.data_fine.valueOf()) / (1000 * 3600 * 24));
    this.prenotaState = 1;
  }

  //Dopo il riepilogo, mostro i pulsanti di paypal
  renderPaypal() {
    this.prenotaState = 2;
    const total: number = this.roomPrice * this.prenotazione.ospiti * this.numGiorni;

    paypal.Buttons({
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: total
            }
          }]
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then(function (details) {
        }).then(this.sendPrenotazione())
      },
      onCancel: function (data) {
        window.location.href = "/index.html";
      }
    }).render(this.paymentElement.nativeElement);

  }

  //Una volta che l'user paga con paypal, invio la prenotazione al backend
  sendPrenotazione() {
    this.prenotaState = 3;
    this.PrenotazioneService.addPrenotazione(this.prenotazione).subscribe();
  }

  //Reindirizzo l'utente all'index una volta completato il pagamento
  redirect() { window.setTimeout(function () { window.location.href = "/index.html"; }, 5000); }
  
}
