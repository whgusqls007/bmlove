package com.bmlove.imageserver.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Config implements WebMvcConfigurer {

    @Value("${image.upload.path}")
    private String uploadPath;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("*");
    }

    // @Override
    // public void addResourceHandlers(ResourceHandlerRegistry registry) {
    // registry.addResourceHandler("/images/**")
    // .addResourceLocations("file://" +
    // "/var/jenkins_home/workspace/bmlove/imageserver/");

    // }
}