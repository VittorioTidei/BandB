package com.unicam.bandb.prenotazione;

import com.unicam.bandb.authJwt.AuthenticationResponse;
import com.unicam.bandb.userJwt.Role;
import com.unicam.bandb.userJwt.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Slf4j
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

    public List<Prenotazione> getPrenotazioneByEmail (@PathVariable String email) {
        List<Prenotazione> prenotazioni = prenotazioneRepository.findAll();
        List<Prenotazione> prenotazioniDate = new ArrayList<>();
        for (Prenotazione p : prenotazioni){
            if(p.getEmail().equals(email)) {
                prenotazioniDate.add(new Prenotazione(p.getId(), p.getCamera(), p.getData_inizio(), p.getData_fine()));
            }
        }
        return prenotazioniDate;
    }

    public Prenotazione addNewPrenotazione(Prenotazione prenotazione) {
        prenotazioneRepository.save(prenotazione);
        return prenotazione;
    }
}

