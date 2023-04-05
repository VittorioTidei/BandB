package it.unicam.controller;


import it.unicam.dto.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/calendarios")
@CrossOrigin(origins = "http://localhost:4200")
public class CalendarioController extends AbstractController<CalendarioDTO>{

}
//localhost:8080/calendarios/read/1