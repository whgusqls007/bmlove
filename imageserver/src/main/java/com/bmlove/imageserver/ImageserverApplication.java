package com.bmlove.imageserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
public class ImageserverApplication {
	public static void main(String[] args) {
		SpringApplication.run(ImageserverApplication.class, args);
	}
}
