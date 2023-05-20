package com.bm.love.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import com.bm.love.dto.PlaceSearchDto;
import com.bm.love.exception.CustomNotFoundException;
import com.bm.love.service.PlaceService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/places")
@RequiredArgsConstructor
public class PlaceController {

    private final PlaceService placeService;
    private final Logger logger = LoggerFactory.getLogger(PlaceController.class);

    @Operation(description = "Get place or places depends on request type.\n" +
            "\n If request type == true ? get place\n" +
            "\n If request type == false ? get places")
    @ApiResponse(responseCode = "200", description = "OK")
    @ApiResponse(responseCode = "404", description = "NOT FOUND")
    @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR")
    @GetMapping("/place")
    public ResponseEntity<List<PlaceResponseDto>> getPlace(PlaceSearchDto placeSearchDto)
            throws CustomNotFoundException {
        List<PlaceResponseDto> list = null;
        if (placeSearchDto.getType()) {
            PlaceResponseDto placeResponseDto = null;
            list = new ArrayList<>();
            placeResponseDto = placeService.getPlaceById(placeSearchDto.getId());
            list.add(placeResponseDto);
        } else {
            list = placeService.getPlaceBySearchText(placeSearchDto.getSearchText());
        }

        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/places")
    public ResponseEntity<List<PlaceResponseDto>> getPlaces(Pageable pageable) throws CustomNotFoundException {

        List<PlaceResponseDto> list = null;
        list = placeService.getPlaces(pageable);
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
        logger.info("file: " + file);
        logger.info("fileName: " + file.getOriginalFilename());
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
