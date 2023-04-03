package it.unicam.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import it.unicam.service.ServiceDTO;


public abstract class AbstractController <DTO>{

	private ServiceDTO<DTO> service;

	@PostMapping("/insert")
	public void Insert(@RequestBody DTO dto){
		service.create(dto);
	}

	@GetMapping("/read/{id}")
	public DTO Read(@PathVariable Long id){
		return service.read(id);
	}

	@PutMapping("/update")
	public DTO Update(@RequestBody DTO dto){
		return service.update(dto);
	}

	@DeleteMapping("/delete")
	public void Delete(@RequestBody DTO dto){
		service.delete(dto);
		return;
	}
}