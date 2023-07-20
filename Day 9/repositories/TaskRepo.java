package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.models.Task;

@Repository
public interface TaskRepo extends JpaRepository<Task,Integer>
{

}
