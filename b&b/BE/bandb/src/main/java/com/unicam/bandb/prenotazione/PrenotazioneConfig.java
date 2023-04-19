package com.unicam.bandb.prenotazione;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class PrenotazioneConfig {

    @Bean
    CommandLineRunner commandLineRunner(PrenotazioneRepository repository){
        return args -> {
            /*Prenotazione pippo = new Prenotazione(
                    101,
                    "Pippo",
                    "Marcelli",
                    "pippo.marcelli@italia.it",
                    "3333635592",
                    LocalDate.of(2023, Month.JUNE, 10),
                    LocalDate.of(2023, Month.JUNE, 15)
            );

            Prenotazione pluto = new Prenotazione(
                    101,
                    "Pluto",
                    "Marcelli",
                    "pluto.marcelli@italia.it",
                    "3333635598",
                    LocalDate.of(2023, Month.JUNE, 10),
                    LocalDate.of(2023, Month.JUNE, 17)
            );*/

            //repository.saveAll(List.of(pippo,pluto));
        };
    }

}
