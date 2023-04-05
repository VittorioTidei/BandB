package it.unicam.controller;

import org.springframework.web.bind.annotation.*;
import it.unicam.dto.CameraDTO;

@RestController
@RequestMapping("/cameras")
@CrossOrigin(origins = "http://localhost:4200")
public class CameraController extends AbstractController<CameraDTO>{

}
