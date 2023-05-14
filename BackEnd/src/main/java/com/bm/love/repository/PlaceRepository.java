package com.bm.love.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bm.love.entity.PlaceEntity;
import java.util.List;

@Repository
public interface PlaceRepository extends JpaRepository<PlaceEntity, Integer> {
    List<PlaceEntity> findAllByTitleContainsOrContentContains(String SearchText, String searchText);
}