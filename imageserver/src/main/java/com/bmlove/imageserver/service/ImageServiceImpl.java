package com.bmlove.imageserver.service;

import java.io.FileNotFoundException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Service;

@Service
public class ImageServiceImpl implements ImageService {

    @Value("${image.upload.path}")
    private String uploadPath;

    @Override
    public FileSystemResource getImages(String fileName) throws FileNotFoundException {
        FileSystemResource resource = new FileSystemResource(uploadPath + fileName);
        if (!resource.exists()) {
            throw new FileNotFoundException();
        }
        System.out.println(resource);
        return resource;
    }
}
