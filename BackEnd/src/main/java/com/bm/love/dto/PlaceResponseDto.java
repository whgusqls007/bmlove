package com.bm.love.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
public class PlaceResponseDto {
    private Integer id;
    private String title;
    private String content;

    @Builder
    public PlaceResponseDto(Integer id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

}
