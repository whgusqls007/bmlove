package com.bm.love.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Config implements WebMvcConfigurer {
    @Value("${resources.location}")
    private String resourcesLocation;
    @Value("${resources.uri_path:}")
    private String resourcesUriPath;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("*");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler(resourcesUriPath + "/**")
                .addResourceLocations("file://" + resourcesLocation);

    }
}