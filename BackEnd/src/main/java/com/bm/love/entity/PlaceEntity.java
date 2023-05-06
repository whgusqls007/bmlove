package com.bm.love.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.bm.love.dto.PlaceResponseDto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PlaceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String content;

    @Builder
    public PlaceEntity(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public PlaceResponseDto toResponseDto() {
        return PlaceResponseDto.builder().id(this.id).title(this.title).content(this.content).build();
    }
}
