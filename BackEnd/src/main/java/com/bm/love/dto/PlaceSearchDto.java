package com.bm.love.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@NoArgsConstructor
public class PlaceSearchDto {

    private Integer id;
    private String searchText;
    private Boolean type;

    @Builder
    public PlaceSearchDto(Integer id, String searchText, Boolean type) {
        this.id = id;
        this.searchText = searchText;
        this.type = type;
    }
}
