package com.bm.love.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.bm.love.dto.error.ErrorResponseDto;
import com.bm.love.exception.CustomNotFoundException;

@RestControllerAdvice("com.bm.love.controller")
public class GlobalExceptionHandler {

    @ExceptionHandler(CustomNotFoundException.class)
    public ResponseEntity<ErrorResponseDto> CustomNotFoundExceptionHandler(CustomNotFoundException e) {
        ErrorResponseDto errorResponseDto = ErrorResponseDto.builder().httpStatus(HttpStatus.NOT_FOUND)
                .message(e.getLocalizedMessage()).build();
        return new ResponseEntity<>(errorResponseDto, HttpStatus.NOT_FOUND);
    }
}
