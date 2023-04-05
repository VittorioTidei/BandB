package it.unicam.dao;

import it.unicam.model.Prenotazione;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface PrenotazioneRepository extends CrudRepository<Prenotazione, Long> {

}
