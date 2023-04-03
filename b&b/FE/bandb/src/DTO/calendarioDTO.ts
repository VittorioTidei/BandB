import { prenotazioneDTO } from "./prenotazioneDTO";

export class calendarioDTO{

    id: number;

    mese: number;

    anno: number;

    prenotazione: prenotazioneDTO[];

constructor(id: number,mese : number,anno: number,prenotazione:prenotazioneDTO[]){
    this.id = id;
    this.mese = mese;
    this.anno = anno;
    this.prenotazione = prenotazione;
}
    // private Long id;

    // private int mese;

    // private int anno;

    // private List<Prenotazione> prenotazioni;
}