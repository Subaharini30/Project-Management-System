package com.neo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.neo.security.entity.TeamLeader;

@Repository
public interface TeamLeaderRepo extends JpaRepository<TeamLeader,Integer>
{

}
