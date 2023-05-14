package com.bm.love.exception;

import lombok.Builder;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public class CustomNotFoundException extends Exception {

    @Builder
    public CustomNotFoundException(String message) {
        super(message);
    }
}
