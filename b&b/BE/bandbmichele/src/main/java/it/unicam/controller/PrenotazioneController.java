package it.unicam.controller;

import it.unicam.dto.PrenotazioneDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/prenotaziones")
@CrossOrigin(origins = "http://localhost:4200")
public class PrenotazioneController extends AbstractController<PrenotazioneDTO>{

}


