package com.unicam.bandb.prenotazione;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/prenotazione")
public class PrenotazioneController {


    private final PrenotazioneService prenotazioneService;

    @Autowired
    public PrenotazioneController(PrenotazioneService prenotazioneService) {
        this.prenotazioneService = prenotazioneService;
    }

    @GetMapping("/get")
    public List<Prenotazione> getPrenotazione(){

       return prenotazioneService.getPrenotazione();
    }


    @PostMapping("/add")
    public ResponseEntity<Prenotazione> registerNewPrenotazione(@RequestBody Prenotazione prenotazione){
        Prenotazione newPrenotazione = prenotazioneService.addNewPrenotazione(prenotazione);
        return new ResponseEntity<>(newPrenotazione, HttpStatus.CREATED);
    }

    @GetMapping(value = "/healthcheck")
    @ResponseStatus(HttpStatus.OK)
    public void healthcheck(){
    }

}
