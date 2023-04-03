import { CameraDTO } from "./cameraDTO"

export class prenotazioneDTO{

    id: number;

    nome: string;

    cognome: string;

    data_inizio: string;

    data_fine: string;

    camera: CameraDTO[];

    identity_card_front : Blob;

    identity_card_back: Blob;
}