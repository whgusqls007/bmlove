package com.bm.love.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bm.love.dto.PlaceCreateDto;
import com.bm.love.dto.PlaceResponseDto;
import com.bm.love.entity.PlaceEntity;
import com.bm.love.repository.PlaceRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = false)
@RequiredArgsConstructor
public class PlaceServiceImpl implements PlaceService {
    private final PlaceRepository placeRepository;

    @Override
    public List<PlaceResponseDto> getPlaces(Pageable pageable) {
        Page<PlaceEntity> page = placeRepository.findAll(pageable);
        List<PlaceResponseDto> list = new ArrayList<>();
        page.get().forEach((e) -> list.add(e.toResponseDto()));
        return list;
    }

    @Override
    public PlaceResponseDto sevePlace(PlaceCreateDto placeCreateDto) {
        PlaceEntity placeEntity = PlaceEntity.builder().title(placeCreateDto.getTitle())
                .content(placeCreateDto.getContent()).build();
        placeEntity = placeRepository.save(placeEntity);
        PlaceResponseDto placeResponseDto = placeEntity.toResponseDto();
        return placeResponseDto;
    }

}
