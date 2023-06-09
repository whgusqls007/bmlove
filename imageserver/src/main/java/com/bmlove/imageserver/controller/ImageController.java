package com.bmlove.imageserver.controller;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bmlove.imageserver.service.ImageService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/image")
@RequiredArgsConstructor
public class ImageController {

    private final ImageService imageService;
    private static Logger logger = LoggerFactory.getLogger(ImageController.class);

    @GetMapping("/get1/{string}")
    public String getString(@PathVariable("string") String str) {
        return str;
    }

    @GetMapping("/get/{fileName}")
    public ResponseEntity<FileSystemResource> getImage(@PathVariable("fileName") String fileName) {
        logger.info("fileName: " + fileName);
        FileSystemResource resource = null;

        try {
            resource = imageService.getImages(fileName);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        HttpHeaders httpHeaders = new HttpHeaders();
        Path filepath = Paths.get(resource != null ? resource.getPath() : "");

        try {
            httpHeaders.add("Content-type", Files.probeContentType(filepath));
        } catch (IOException e) {
            e.printStackTrace();
        }

        return new ResponseEntity<FileSystemResource>(resource, httpHeaders, HttpStatus.OK);
    }
}
