package com.bm.love.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.bm.love.dto.schedule.ScheduleResponseDto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ScheduleEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String title;
  private Date date;

  @Builder
  public ScheduleEntity(String title, Date date) {
    this.title = title;
    this.date = date;
  }

  public ScheduleResponseDto toResponseDto() {
    return ScheduleResponseDto.builder().id(this.id).title(this.title).date(this.date).build();
  }
}
