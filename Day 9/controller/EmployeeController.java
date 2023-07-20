package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.dto.EmployeeDto;
import com.example.demo.models.Employee;
import com.example.demo.service.EmployeeService;

@RequestMapping("/task")
@RestController
public class EmployeeController 
{
	@Autowired
	private EmployeeService ts;
	
	@PostMapping("/create")
	public String addEmployee(@RequestBody Employee emp)
	{
        return ts.addEmployee(emp);
    }

	@GetMapping("/view")
	public List<EmployeeDto > getAllEmployee()
	{
		return ts.getAllEmployee();
	}
	
	@PutMapping("/edit/{id}")
	public Employee updateById(@PathVariable int id,@RequestBody Employee emp)
	{
		emp.setEmp_id(id);
		return ts.updateEmployeeById(emp);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteEmployee(@PathVariable int id) {
		return ts.deleteEmployee(id);
	}

}
