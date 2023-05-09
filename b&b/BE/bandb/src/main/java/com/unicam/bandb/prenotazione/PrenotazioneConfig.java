package com.unicam.bandb.prenotazione;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class PrenotazioneConfig {

    @Bean
    CommandLineRunner commandLineRunner(PrenotazioneRepository repository){
        return args -> {};
    }

}
