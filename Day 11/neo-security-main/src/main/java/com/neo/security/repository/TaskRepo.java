package com.neo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.neo.security.entity.Task;

@Repository
public interface TaskRepo extends JpaRepository<Task,Integer>
{

}
