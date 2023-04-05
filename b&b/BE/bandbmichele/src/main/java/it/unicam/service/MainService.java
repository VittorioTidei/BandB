package it.unicam.service;

import it.unicam.converter.Converter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;

public abstract class MainService<ENTITY,DTO> implements ServiceDTO<DTO> {

	@Autowired
	private Converter<ENTITY,DTO> conv;
	@Autowired
	protected CrudRepository<ENTITY,Long> repository;

	@Override
	public void create(DTO dto){
		repository.save(conv.toEntity(dto));
	}
	@Override
	public DTO read(Long id){ return conv.toDTO(repository.findById(id).get());}
	@Override
	public DTO update(DTO dto){ return conv.toDTO(repository.save(conv.toEntity(dto)));}
	@Override
	public void delete(DTO dto){ repository.delete(conv.toEntity(dto));}

}