package com.bm.love.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello";
    }

    @GetMapping("/api")
    public String api() {
        return "API";
    }

    @GetMapping("/api/hello")
    public String apiHello() {
        return "APIHello";
    }
}