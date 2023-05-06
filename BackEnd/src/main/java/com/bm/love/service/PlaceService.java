package com.bm.love.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.bm.love.dto.PlaceCreateDto;
import com.bm.love.dto.PlaceResponseDto;

public interface PlaceService {
    List<PlaceResponseDto> getPlaces(Pageable pageable);

    PlaceResponseDto sevePlace(PlaceCreateDto placeCreateDto);
}
