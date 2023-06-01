package com.unicam.bandb.authJwt;

import com.unicam.bandb.configJwt.JwtService;
import com.unicam.bandb.userJwt.Role;
import com.unicam.bandb.userJwt.User;
import com.unicam.bandb.userJwt.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

//implementa i metodi di registrazione e autenticazione
@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) throws Exception {
        if(!repository.findByEmail(request.getEmail()).isPresent()) {
            var user = User.builder()
                    .email(request.getEmail())
                    //per la password prima di passarla al databse andiamo a codificarla
                    .password(passwordEncoder.encode(request.getPassword()))
                    .role(Role.USER) //assegno il ruolo di user
                    .build();
            repository.save(user);
            //in base all'informazioni passate salvate sull'oggetto user, vado a creare il token
            var jwtToken = jwtService.generateToken(user);
            return AuthenticationResponse.builder()
                    //nell'autenticazione passo il token appena generato
                    .token(jwtToken)
                    .build();
        }
        else {
            throw new Exception();
        }
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        //l'authentication Manager una volta passati i dati farà tutto da solo, se i dati passati come username
        //e password non fossero corretti lancerà un' eccezione.
        //System.out.println(request.getPassword());
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        //a questo punto l'utente è già stato autenticato
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow(); //non necessario dopo l'autenticazione ma messo per prevenzione
        //una volta autenticato creo il token e lo inserisco nella response
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                //nell'autenticazione passo il token appena generato
                .token(jwtToken)
                .build();
    }

}
