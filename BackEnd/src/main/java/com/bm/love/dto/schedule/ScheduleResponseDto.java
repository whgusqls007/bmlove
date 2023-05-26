package com.bm.love.dto.schedule;

import java.sql.Date;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
public class ScheduleResponseDto {
  private Integer id;
  private String title;
  private Date date;

  @Builder
  public ScheduleResponseDto(Integer id, String title, Date date) {
    this.id = id;
    this.title = title;
    this.date = date;
  }
}
