package com.unicam.bandb.authJwt;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//Questa classe contiene gli endpoint dove creare un account e autenticarsi
@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
@Slf4j
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) throws Exception {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request){
        return ResponseEntity.ok(service.authenticate(request));
    }

}
