package com.neo.security.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.neo.security.dto.ProjectDto;
import com.neo.security.service.ProjectService;

@RestController
@RequestMapping("/project")
public class ProjectController
{
	@Autowired
	private ProjectService ps;
	
	@PostMapping("/post")
    public ResponseEntity<Void> createProject(@RequestBody ProjectDto pd) {
    	ps.saveProject(pd);
    	return ResponseEntity.status(HttpStatus.CREATED).build();
    }
    
    @GetMapping("/get")
    public List<ProjectDto> getAllProjects() {
        return ps.getAllProjects();
    }

    @GetMapping("/{id}")
    public ProjectDto getProjectById(@PathVariable int id) {
        return ps.getProjectById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateProject(@PathVariable int id, @RequestBody ProjectDto pd) {
        pd.setPId(id);
        ps.updateProject(pd);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable int id) {
        ps.deleteProject(id);
        return ResponseEntity.noContent().build();
    }
}

