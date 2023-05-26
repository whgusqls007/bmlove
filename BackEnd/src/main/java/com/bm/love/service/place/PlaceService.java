package com.bm.love.service.place;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import com.bm.love.dto.image.ImageResponseDto;
import com.bm.love.dto.place.PlaceCreateDto;
import com.bm.love.dto.place.PlaceResponseDto;
import com.bm.love.exception.CustomNotFoundException;

public interface PlaceService {

    List<PlaceResponseDto> getPlaceBySearchText(String searchText) throws CustomNotFoundException;

    PlaceResponseDto getPlaceById(Integer id) throws CustomNotFoundException;

    List<PlaceResponseDto> getPlaces(Pageable pageable) throws CustomNotFoundException;

    PlaceResponseDto sevePlace(PlaceCreateDto placeCreateDto);

    ImageResponseDto savePlaceImage(MultipartFile file) throws MalformedURLException, IOException;

    List<ImageResponseDto> getPlaceImages(Pageable pageable);
}
