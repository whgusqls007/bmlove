package com.bm.love.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.bm.love.dto.ImageResponseDto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ImageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String uri;

    @Builder
    public ImageEntity(String uri) {
        this.uri = uri;
    }

    public ImageResponseDto toResponseDto() {
        return ImageResponseDto.builder().id(this.id).uri(this.uri).build();
    }
}
