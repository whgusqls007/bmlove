package com.bm.love.controller;

import java.sql.Date;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bm.love.dto.schedule.ScheduleCreateDto;
import com.bm.love.dto.schedule.ScheduleResponseDto;
import com.bm.love.exception.CustomNotFoundException;
import com.bm.love.service.schedule.ScheduleService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/schedules")
@RequiredArgsConstructor
public class ScheduleController {

  private final ScheduleService scheduleService;

  final static Logger logger = LoggerFactory.getLogger(ScheduleController.class);

  @Operation(description = "Post Schedule")
  @ApiResponse(responseCode = "200", description = "OK")
  @PostMapping("/schedule")
  public ResponseEntity<ScheduleResponseDto> postSchedule(ScheduleCreateDto scheduleCreateDto) {
    ScheduleResponseDto scheduleResponseDto = null;

    try {
      scheduleResponseDto = scheduleService.saveSchedule(scheduleCreateDto);
    } catch (Exception e) {
      return null;
    }

    return new ResponseEntity<>(scheduleResponseDto, HttpStatus.OK);
  }

  @Operation(description = "Get Schedule List")
  @ApiResponse(responseCode = "200", description = "OK")
  @GetMapping("/schedules")
  public ResponseEntity<List<ScheduleResponseDto>> getSchedules(Pageable pageable) throws CustomNotFoundException {
    logger.info("pageable: " + pageable.toString());
    List<ScheduleResponseDto> list = null;
    list = scheduleService.getSchedules(pageable);
    return new ResponseEntity<>(list, HttpStatus.OK);
  }

  @Operation(description = "Get Month Schedule List")
  @ApiResponse(responseCode = "200", description = "OK")
  @GetMapping("/schedules/month")
  public ResponseEntity<Map<String, String>> getSchedules(Date startDate, Date endDate) {
    logger.info("startDate: " + startDate);
    logger.info("endDate: " + endDate);

    Map<String, String> map = null;

    try {
      map = scheduleService.getMonthSchedule(startDate, endDate);
    } catch (CustomNotFoundException e) {
      return new ResponseEntity<>(map, HttpStatus.NO_CONTENT);
    }

    return new ResponseEntity<>(map, HttpStatus.OK);
  }
}
