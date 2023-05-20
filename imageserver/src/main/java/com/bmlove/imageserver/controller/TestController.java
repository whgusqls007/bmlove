package com.bmlove.imageserver.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class TestController {

  private static Logger logger = LoggerFactory.getLogger(TestController.class);

  @GetMapping
  public String get() {
    logger.info("test controller for imageserver");
    return "hello imageserver";
  }
}
