package com.bm.love.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<PlaceResponseDto> postplace(@RequestBody @Valid PlaceCreateDto placeCreateDto) {
        PlaceResponseDto placeResponseDto = null;
        try {
            placeResponseDto = placeService.sevePlace(placeCreateDto);
        } catch (Exception e) {
            return null;
        }
        return new ResponseEntity<>(placeResponseDto, HttpStatus.OK);
    }

}
