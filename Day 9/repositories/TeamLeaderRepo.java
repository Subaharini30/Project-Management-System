package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.models.TeamLeader;

@Repository
public interface TeamLeaderRepo extends JpaRepository<TeamLeader,Integer>
{

}
