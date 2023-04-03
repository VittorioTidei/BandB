package it.unicam.dao;

import it.unicam.model.Calendario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface CalendarioRepository extends CrudRepository<Calendario, Long> {

}
