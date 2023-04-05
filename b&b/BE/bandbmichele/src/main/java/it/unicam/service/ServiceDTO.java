package it.unicam.service;

public interface ServiceDTO<DTO> {
	public DTO read( Long id);

	public void create(DTO dto);

	public DTO update(DTO dto);

	public void delete(DTO dto);
}