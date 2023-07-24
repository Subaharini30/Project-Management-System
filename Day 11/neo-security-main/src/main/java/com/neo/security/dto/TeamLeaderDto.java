package com.neo.security.dto;

import java.util.List;
import lombok.Data;

@Data
public class TeamLeaderDto 
{
	private String tName;
	private String tMail;
	private List<EmployeeDto> emp;
}
