package com.bm.love.service.schedule;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bm.love.dto.schedule.ScheduleCreateDto;
import com.bm.love.dto.schedule.ScheduleResponseDto;
import com.bm.love.entity.ScheduleEntity;
import com.bm.love.exception.CustomNotFoundException;
import com.bm.love.repository.ScheduleRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = false)
@RequiredArgsConstructor
public class ScheduleServiceImpl implements ScheduleService {

  private final ScheduleRepository scheduleRepository;

  @Override
  public ScheduleResponseDto saveSchedule(ScheduleCreateDto scheduleCreateDto) {
    ScheduleEntity scheduleEntity = ScheduleEntity.builder().title(scheduleCreateDto.getTitle())
        .date(scheduleCreateDto.getDate()).build();
    scheduleEntity = scheduleRepository.save(scheduleEntity);
    ScheduleResponseDto scheduleResponseDto = scheduleEntity.toResponseDto();
    return scheduleResponseDto;
  }

  @Override
  public List<ScheduleResponseDto> getSchedules(Pageable pageable) throws CustomNotFoundException {
    deletePrevSchedule();

    Page<ScheduleEntity> page = scheduleRepository.findAll(pageable);
    List<ScheduleResponseDto> list = new ArrayList<>();
    page.get().forEach((e) -> list.add(e.toResponseDto()));

    if (list.size() == 0) {
      throw CustomNotFoundException.builder().message("No content found").build();
    }

    return list;
  }

  @Override
  public void deletePrevSchedule() {
    scheduleRepository.deleteAllByDate(new Date(new java.util.Date().getTime()));
    return;
  }
}
