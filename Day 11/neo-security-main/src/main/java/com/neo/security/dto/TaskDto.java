package com.neo.security.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class TaskDto 
{
	private int taId;
	private String taName;
    private String taStatus;
    private Date taStartdate;
    private Date taEnddate;
    private EmployeeDto employeeDto;
}
