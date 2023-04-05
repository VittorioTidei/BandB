package com.unicam.bandb.prenotazione;

import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/")
    public List<Prenotazione> getPrenotazione(){
        return prenotazioneService.getPrenotazione();
    }

    @PostMapping
    public void registerNewPrenotazione(@RequestBody Prenotazione prenotazione){
        prenotazioneService.addNewPrenotazione(prenotazione);
    }

}
