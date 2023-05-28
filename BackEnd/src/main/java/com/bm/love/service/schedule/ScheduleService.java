package com.bm.love.service.schedule;

import java.sql.Date;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Pageable;

import com.bm.love.dto.schedule.ScheduleCreateDto;
import com.bm.love.dto.schedule.ScheduleResponseDto;
import com.bm.love.exception.CustomNotFoundException;

public interface ScheduleService {
  public ScheduleResponseDto saveSchedule(ScheduleCreateDto scheduleCreateDto);

  public List<ScheduleResponseDto> getSchedules(Pageable pageable) throws CustomNotFoundException;

  public Map<String, String> getMonthSchedule(Date startDate, Date endDate) throws CustomNotFoundException;

  public void deletePrevSchedule();
}
