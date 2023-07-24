package com.neo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.neo.security.entity.Project;

@Repository
public interface ProjectRepo extends JpaRepository<Project,Integer>
{

}
