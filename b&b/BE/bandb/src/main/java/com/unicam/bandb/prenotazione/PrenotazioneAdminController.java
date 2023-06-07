package com.unicam.bandb.prenotazione;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "api/v1/prenotazione/admin")
@PreAuthorize("hasRole('ADMIN')")
public class PrenotazioneAdminController {

    @GetMapping("/get")
    @PreAuthorize("hasAuthority('admin:read')")
    public String get() {
        return "GET:: admin controller";
    }
}
