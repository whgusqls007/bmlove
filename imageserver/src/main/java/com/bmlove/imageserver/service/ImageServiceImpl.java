package com.bmlove.imageserver.service;

import java.io.FileNotFoundException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Service;

@Service
public class ImageServiceImpl implements ImageService {

    private final Logger logger = LoggerFactory.getLogger(ImageService.class);

    @Value("${image.upload.path}")
    private String uploadPath;

    @Override
    public FileSystemResource getImages(String fileName) throws FileNotFoundException {
        FileSystemResource resource = new FileSystemResource(uploadPath + fileName);
        logger.info(uploadPath + fileName);
        System.out.println(uploadPath + fileName);
        if (!resource.exists()) {
            throw new FileNotFoundException();
        }
        return resource;
    }
}
