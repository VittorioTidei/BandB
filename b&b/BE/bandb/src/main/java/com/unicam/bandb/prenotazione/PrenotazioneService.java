package com.unicam.bandb.prenotazione;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
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

    public void addNewPrenotazione(Prenotazione prenotazione) {
        System.out.println(prenotazione);
    }
}
