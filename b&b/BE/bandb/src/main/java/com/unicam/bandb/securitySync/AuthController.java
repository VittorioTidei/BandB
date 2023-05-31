package com.unicam.bandb.securitySync;
/*
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final TokenService tokenService;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthController(TokenService tokenService, AuthenticationManager authenticationManager) {
        this.tokenService = tokenService;
        this.authenticationManager = authenticationManager;
    }


    @PostMapping("/token")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public String token(@RequestBody LoginRequest userLogin) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userLogin.username(),userLogin.password()));
        System.out.println(userLogin);
        return tokenService.generateToken(authentication);

    }

     /*
    @PostMapping("/token")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public String token(Authentication authentication) {
        return tokenService.generateToken(authentication);

    }


}
        */

