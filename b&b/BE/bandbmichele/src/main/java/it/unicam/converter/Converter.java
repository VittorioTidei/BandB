package it.unicam.converter;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Converter<ENTITY,DTO>{

    public ENTITY toEntity(DTO dto){return (ENTITY) dto;}


    public DTO toDTO(ENTITY entity){return (DTO) entity;}

    public List<ENTITY> toEntityList(List<DTO> dtos){ return (List<ENTITY>) dtos;}

    public  List<DTO> toDtoList(List<ENTITY> entities){return (List<DTO>) entities;}

}
