package com.bm.love.service.schedule;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.bm.love.dto.schedule.ScheduleCreateDto;
import com.bm.love.dto.schedule.ScheduleResponseDto;
import com.bm.love.exception.CustomNotFoundException;

public interface ScheduleService {
  public ScheduleResponseDto saveSchedule(ScheduleCreateDto scheduleCreateDto);

  public List<ScheduleResponseDto> getSchedules(Pageable pageable) throws CustomNotFoundException;

  public void deletePrevSchedule();
}
