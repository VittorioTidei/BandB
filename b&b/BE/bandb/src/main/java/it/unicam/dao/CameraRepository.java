package it.unicam.dao;

import javax.transaction.Transactional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import it.unicam.model.Camera;
@Repository
@Transactional
public interface CameraRepository extends CrudRepository<Camera, Long>{
}
