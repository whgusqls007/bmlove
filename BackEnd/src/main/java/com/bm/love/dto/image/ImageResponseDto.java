package com.bm.love.dto.image;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
public class ImageResponseDto {
    private Integer id;
    private String uri;

    @Builder
    public ImageResponseDto(Integer id, String uri) {
        this.id = id;
        this.uri = uri;
    }

}
