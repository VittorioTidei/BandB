package it.unicam.dto;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import it.unicam.model.Prenotazione;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@JsonIdentityInfo(generator= ObjectIdGenerators.IntSequenceGenerator.class,property="@id", scope = CalendarioDTO.class)
public class CalendarioDTO {

    private Long id;

    private int mese;

    private int anno;

    private List<Prenotazione> prenotazioni;
}
