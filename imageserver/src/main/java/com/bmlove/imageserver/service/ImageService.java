package com.bmlove.imageserver.service;

import java.io.FileNotFoundException;

import org.springframework.core.io.FileSystemResource;

public interface ImageService {
    public FileSystemResource getImages(String fileName) throws FileNotFoundException;
}
