package it.unicam.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "calendarios")
@JsonIdentityInfo(generator= ObjectIdGenerators.IntSequenceGenerator.class,property="@id", scope = Calendario.class)
public class Calendario {

    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int mese;

    private int anno;
    @OneToMany(mappedBy = "calendario")
    private List<Prenotazione> prenotazioni;
}
