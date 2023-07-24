package com.neo.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import com.neo.security.dto.EmployeeDto;
import com.neo.security.dto.TaskDto;
import com.neo.security.entity.Employee;
import com.neo.security.entity.Task;
import com.neo.security.repository.TaskRepo;

@Service
public class TaskService 
{
    @Autowired
    private TaskRepo taskRepository;

    public void saveTask(TaskDto taskDto) {
        Task task = Task.builder()
                .taName(taskDto.getTaName())
                .taStatus(taskDto.getTaStatus())
                .taStartdate(taskDto.getTaStartdate())
                .taEnddate(taskDto.getTaEnddate())
                .build();

        if (taskDto.getEmployeeDto() != null) {
            EmployeeDto employeeDto = taskDto.getEmployeeDto();
            Employee employee = Employee.builder()
                    .empId(employeeDto.getEmpId())
                    .empName(employeeDto.getEmpName())
                    .empMail(employeeDto.getEmpMail())
                    .build();

            employee.setTask(task); // Set the bidirectional relationship
            task.setEmployee(employee);
        }

        taskRepository.save(task);
    }

    public TaskDto getTaskById(int taId) {
        Optional<Task> taskOpt = taskRepository.findById(taId);
        TaskDto taskDto = new TaskDto();
        if (taskOpt.isPresent()) {
            Task task = taskOpt.get();
            taskDto.setTaName(task.getTaName());
            taskDto.setTaStatus(task.getTaStatus());
            taskDto.setTaStartdate(task.getTaStartdate());
            taskDto.setTaEnddate(task.getTaEnddate());

            EmployeeDto employeeDto = new EmployeeDto();
            Employee employee = task.getEmployee();
            if (employee != null) {
                employeeDto.setEmpId(employee.getEmpId());
                employeeDto.setEmpName(employee.getEmpName());
                employeeDto.setEmpMail(employee.getEmpMail());
            }
            taskDto.setEmployeeDto(employeeDto);
        }
        return taskDto;
    }

    public List<TaskDto> getAllTasks() {
        List<Task> tasks = taskRepository.findAll();
        List<TaskDto> taskDtos = new ArrayList<>();

        for (Task task : tasks) {
            TaskDto taskDto = TaskDto.builder()
                    .taName(task.getTaName())
                    .taStatus(task.getTaStatus())
                    .taStartdate(task.getTaStartdate())
                    .taEnddate(task.getTaEnddate())
                    .build();

            EmployeeDto employeeDto = new EmployeeDto();
            Employee employee = task.getEmployee();
            if (employee != null) {
                employeeDto.setEmpId(employee.getEmpId());
                employeeDto.setEmpName(employee.getEmpName());
                employeeDto.setEmpMail(employee.getEmpMail());
            }
            taskDto.setEmployeeDto(employeeDto);

            taskDtos.add(taskDto);
        }

        return taskDtos;
      
    }

    public void updateTask(TaskDto taskDto) {
        Optional<Task> taskOpt = taskRepository.findById(taskDto.getTaId());
        if (taskOpt.isPresent()) {
            Task task = taskOpt.get();
            task.setTaName(taskDto.getTaName());
            task.setTaStatus(taskDto.getTaStatus());
            task.setTaStartdate(taskDto.getTaStartdate());
            task.setTaEnddate(taskDto.getTaEnddate());

            if (taskDto.getEmployeeDto() != null) {
                EmployeeDto employeeDto = taskDto.getEmployeeDto();
                Employee employee = task.getEmployee();
                if (employee == null) {
                    employee = Employee.builder().build();
                }
                employee.setEmpId(employeeDto.getEmpId());
                employee.setEmpName(employeeDto.getEmpName());
                employee.setEmpMail(employeeDto.getEmpMail());

                employee.setTask(task); 
                task.setEmployee(employee);
            } else {
                task.setEmployee(null);
            }

            taskRepository.save(task);
        }
    }
    
    public void deleteTask(int taId) {
        taskRepository.deleteById(taId);
    }
}
