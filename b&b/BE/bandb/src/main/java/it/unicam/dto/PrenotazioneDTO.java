package it.unicam.dto;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import it.unicam.model.Camera;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIdentityInfo(generator= ObjectIdGenerators.IntSequenceGenerator.class,property="@id", scope = PrenotazioneDTO.class)
public class PrenotazioneDTO {

    private Long id;

    private String nome;

    private String cognome;

    private LocalDate data_inizio;

    private LocalDate data_fine;

    private List<Camera> camera;

    private String identity_card_front;

    private String identity_card_back;
}
