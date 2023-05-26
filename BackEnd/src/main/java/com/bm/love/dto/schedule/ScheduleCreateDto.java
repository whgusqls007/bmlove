package com.bm.love.dto.schedule;

import java.sql.Date;

import javax.validation.constraints.NotBlank;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
public class ScheduleCreateDto {
  @NotBlank(message = "제목을 입력하세요.")
  private String title;
  @NotBlank(message = "날짜를 입력하세요.")
  private Date date;

  @Builder
  public ScheduleCreateDto(String title, Date date) {
    this.title = title;
    this.date = date;
  }
}
