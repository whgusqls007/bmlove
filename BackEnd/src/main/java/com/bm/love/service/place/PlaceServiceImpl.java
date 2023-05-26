package com.bm.love.service.place;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.bm.love.dto.image.ImageResponseDto;
import com.bm.love.dto.place.PlaceCreateDto;
import com.bm.love.dto.place.PlaceResponseDto;
import com.bm.love.entity.ImageEntity;
import com.bm.love.entity.PlaceEntity;
import com.bm.love.exception.CustomNotFoundException;
import com.bm.love.repository.ImageRepository;
import com.bm.love.repository.PlaceRepository;
import com.bm.love.util.Utils;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = false)
@RequiredArgsConstructor
public class PlaceServiceImpl implements PlaceService {
    private final PlaceRepository placeRepository;
    private final ImageRepository imageRepository;

    @Value("${image.upload.path}")
    private String uploadPath;

    @Override
    public List<PlaceResponseDto> getPlaceBySearchText(String searchText) throws CustomNotFoundException {
        List<PlaceResponseDto> list = new ArrayList<>();
        placeRepository.findAllByTitleContainsOrContentContains(searchText, searchText).forEach((e) -> {
            list.add(e.toResponseDto());
        });

        if (list.size() == 0) {
            throw CustomNotFoundException.builder().message("No content found by searchText").build();
        }

        return list;
    }

    @Override
    public PlaceResponseDto getPlaceById(Integer id) throws CustomNotFoundException {
        Optional<PlaceEntity> placeEntity = placeRepository.findById(id);

        if (!placeEntity.isPresent()) {
            throw CustomNotFoundException.builder().message("No content found by id").build();
        }

        PlaceResponseDto placeResponseDto = placeEntity.get().toResponseDto();
        System.out.println(placeResponseDto);
        return placeResponseDto;
    }

    @Override
    public List<PlaceResponseDto> getPlaces(Pageable pageable) throws CustomNotFoundException {
        Page<PlaceEntity> page = placeRepository.findAll(pageable);
        List<PlaceResponseDto> list = new ArrayList<>();
        page.get().forEach((e) -> list.add(e.toResponseDto()));

        if (list.size() == 0) {
            throw CustomNotFoundException.builder().message("No content found").build();
        }

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

    @Override
    public ImageResponseDto savePlaceImage(MultipartFile file) throws MalformedURLException, IOException {
        String fileName = Utils.getRandomStr() + new Date().getTime() + file.getOriginalFilename();
        System.out.println("fileName: " + fileName);

        try (InputStream inputStream = file.getInputStream()) {
            Path filePath = Paths.get(this.uploadPath).resolve(fileName);
            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);

            ImageEntity imageEntity = ImageEntity.builder().uri(fileName).build();
            imageEntity = imageRepository.save(imageEntity);
            ImageResponseDto imageResponseDto = imageEntity.toResponseDto();

            return imageResponseDto;
        } catch (MalformedURLException e) {
            throw new MalformedURLException("No Valid Protocol");
        }
    }

    @Override
    public List<ImageResponseDto> getPlaceImages(Pageable pageable) {
        Page<ImageEntity> page = imageRepository.findAll(pageable);
        List<ImageResponseDto> list = new ArrayList<>();
        page.get().forEach((e) -> list.add(e.toResponseDto()));
        return list;
    }

}
