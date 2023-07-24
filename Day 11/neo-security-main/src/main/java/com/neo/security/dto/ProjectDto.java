package com.neo.security.dto;

import java.sql.Date;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjectDto 
{
	private int pId;
	private String pName;
	private String pDescription;
	private int pBudget;
	private Date pStdate;
	private Date pEndate;
	private List<EmployeeProjectDto> ep;
}
