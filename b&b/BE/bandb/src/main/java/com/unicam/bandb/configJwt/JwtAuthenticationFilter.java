package com.unicam.bandb.configJwt;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    //filtra tutte le richieste in arrivo
    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,@NonNull HttpServletResponse response,@NonNull FilterChain filterChain) throws ServletException, IOException {

        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String userEmail;

        //se header è vuoto o non comincia con Bearer rimanda al filtro successivo
        if(authHeader == null ||!authHeader.startsWith("Bearer ")){
            filterChain.doFilter(request, response);
            return;
        }

        //7 poichè essendoci sempre Bearer all'inizio del header, inizierà a leggere dopo 7 caratteri ovvero "Bearer "
        jwt = authHeader.substring(7);

        //estrae dal jwt in arrivo l'email e salva la stringa nella variabile
        userEmail= jwtService.extractUsername(jwt);

        //se l'email è già utenticato non serve rifare i controlli
        if(userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            //prende l'email dal database
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);

            //controllo se il token è valido con il valore ppena trovato
            if(jwtService.isTokenValid(jwt, userDetails)) {

                //se valido creo un oggetto authenticationToken passando i dati
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities()
                );

                //aggiungo altre informazioni
                authToken.setDetails( new WebAuthenticationDetailsSource().buildDetails(request));

                //agiorno l'authentication token
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }

            //chiamo sempre il filtro
            filterChain.doFilter(request, response);
        }
    }
}
