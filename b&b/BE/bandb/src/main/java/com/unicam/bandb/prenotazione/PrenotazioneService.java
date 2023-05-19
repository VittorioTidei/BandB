package com.unicam.bandb.prenotazione;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class PrenotazioneService {

    private final PrenotazioneRepository prenotazioneRepository;

    public PrenotazioneService(PrenotazioneRepository prenotazioneRepository) {
        this.prenotazioneRepository = prenotazioneRepository;
    }


    public List<Prenotazione> getPrenotazione(){
        return prenotazioneRepository.findAll();
    }

    public List<Prenotazione> getDate(){

        List<Prenotazione> prenotazioni = prenotazioneRepository.findAll();
        List<Prenotazione> prenotazioniDate = new ArrayList<>();
        for (Prenotazione p : prenotazioni){
            prenotazioniDate.add(new Prenotazione(p.getId(), p.getCamera(), p.getData_inizio(), p.getData_fine()));
        }
        return prenotazioniDate;
    }

    public Prenotazione addNewPrenotazione(Prenotazione prenotazione) {
        prenotazioneRepository.save(prenotazione);
        return prenotazione;
    }
}

