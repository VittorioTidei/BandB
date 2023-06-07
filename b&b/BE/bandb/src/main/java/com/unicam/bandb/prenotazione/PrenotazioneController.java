package com.unicam.bandb.prenotazione;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "api/v1/prenotazione/user")
public class PrenotazioneController {


    private final PrenotazioneService prenotazioneService;

    public PrenotazioneController(PrenotazioneService prenotazioneService) {
        this.prenotazioneService = prenotazioneService;
    }


    @GetMapping("/get")
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public List<Prenotazione> getPrenotazione(){

       //return prenotazioneService.getPrenotazione();
        return null;
    }

    @GetMapping("/getDate")
    public List<Prenotazione> getDate(){ return prenotazioneService.getDate(); }

    @GetMapping("/getData")
    public List<Prenotazione> getPrenotazioneByEmail (@RequestParam String email) {
        return prenotazioneService.getPrenotazioneByEmail(email);
    }

    @DeleteMapping("/delete")
    public void deleteUserByEmail (@RequestParam String email) throws Exception {
        prenotazioneService.deleteUserByEmail(email);
    }

    @PutMapping("/admin")
    public void AdminUserByEmail (@RequestParam String email) throws Exception {
        prenotazioneService.adminUserByEmail(email);
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
