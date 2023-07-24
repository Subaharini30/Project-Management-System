package com.neo.security.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.neo.security.dto.TaskDto;
import com.neo.security.service.TaskService;

@RestController
@RequestMapping("/task")
public class TaskController 
{
    @Autowired
    private TaskService taskService;

	@CrossOrigin
    @PostMapping("/post")
    public ResponseEntity<Void> createTask(@RequestBody TaskDto taskDto) {
        taskService.saveTask(taskDto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

	@CrossOrigin
    @GetMapping("/{id}")
    public TaskDto getTaskById(@PathVariable int id) {
        return taskService.getTaskById(id);
    }

	@CrossOrigin
    @GetMapping("/get")
    public List<TaskDto> getAllTasks() {
        return taskService.getAllTasks();
    }
	
	@CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity<Void> updateTask(@PathVariable int id, @RequestBody TaskDto taskDto) {
        taskDto.setTaId(id);
        taskService.updateTask(taskDto);
        return ResponseEntity.ok().build();
    }

	@CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable int id) {
        taskService.deleteTask(id);
        return ResponseEntity.noContent().build();
    }
}
