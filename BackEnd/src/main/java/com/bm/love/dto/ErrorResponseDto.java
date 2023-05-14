package com.bm.love.dto;

import org.springframework.http.HttpStatus;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@Builder
@NoArgsConstructor
public class ErrorResponseDto {
    private int code;
    private HttpStatus httpStatus;
    private String message;

    @Builder
    public ErrorResponseDto(HttpStatus httpStatus, String message) {
        this.httpStatus = httpStatus;
        this.code = httpStatus.value();
        this.message = message;
    }
}
