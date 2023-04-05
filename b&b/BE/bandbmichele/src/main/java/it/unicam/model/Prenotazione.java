package it.unicam.model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "prenotaziones")
@JsonIdentityInfo(generator= ObjectIdGenerators.IntSequenceGenerator.class,property="@id", scope = Prenotazione.class)
public class Prenotazione {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String cognome;

    private LocalDate data_inizio;

    private LocalDate data_fine;

    @OneToMany(mappedBy = "prenotazione")
    private List<Camera> camera;

    private String identity_card_front;

    @ManyToOne
    private Calendario calendario;

    private String identity_card_back;
}
