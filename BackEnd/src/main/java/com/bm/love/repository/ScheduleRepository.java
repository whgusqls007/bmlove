package com.bm.love.repository;

import java.sql.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bm.love.entity.ScheduleEntity;

@Repository
public interface ScheduleRepository extends JpaRepository<ScheduleEntity, Integer> {
  @Transactional
  @Modifying
  @Query(value = "delete from schedule_entity where date < :date", nativeQuery = true)
  void deleteAllByDate(@Param("date") Date date);

  @Transactional
  @Modifying
  @Query(value = "select * from schedule_entity where date between :startDate and :endDate order by date desc", nativeQuery = true)
  List<ScheduleEntity> findMonthSchedule(@Param("startDate") Date startDate, @Param("endDate") Date endDate);
}
