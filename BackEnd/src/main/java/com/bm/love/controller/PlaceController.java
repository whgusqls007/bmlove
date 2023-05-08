package com.bm.love.controller;

import java.io.IOException;
import java.util.List;

import javax.validation.Valid;

import org.apache.catalina.connector.Response;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.bm.love.dto.ImageResponseDto;
import com.bm.love.dto.PlaceCreateDto;
import com.bm.love.dto.PlaceResponseDto;
import com.bm.love.service.PlaceService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/places")
@RequiredArgsConstructor
public class PlaceController {

    private final PlaceService placeService;

    @GetMapping("/place")
    public ResponseEntity<List<PlaceResponseDto>> getPlaces(Pageable pageable) {
        List<PlaceResponseDto> list = null;
        try {
            list = placeService.getPlaces(pageable);
        } catch (Exception e) {
            return null;
        }
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping("/place")
    public ResponseEntity<PlaceResponseDto> postPlace(@RequestBody @Valid PlaceCreateDto placeCreateDto) {
        PlaceResponseDto placeResponseDto = null;
        try {
            placeResponseDto = placeService.sevePlace(placeCreateDto);
        } catch (Exception e) {
            return null;
        }
        return new ResponseEntity<>(placeResponseDto, HttpStatus.OK);
    }

    @PostMapping("/place/image")
    public ResponseEntity<ImageResponseDto> postPlaceImage(@RequestParam MultipartFile file) {
        ImageResponseDto imageResponseDto = null;
        try {
            imageResponseDto = placeService.savePlaceImage(file);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(imageResponseDto, HttpStatus.OK);
    }

    @GetMapping("/place/images")
    public ResponseEntity<List<ImageResponseDto>> getPlaceImages(Pageable pageable) {
        List<ImageResponseDto> list = null;
        try {
            list = placeService.getPlaceImages(pageable);
        } catch (Exception e) {
            return null;
        }
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
}
