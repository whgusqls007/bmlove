package com.bm.love.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bm.love.entity.PlaceEntity;

@Repository
public interface PlaceRepository extends JpaRepository<PlaceEntity, Integer> {

}
