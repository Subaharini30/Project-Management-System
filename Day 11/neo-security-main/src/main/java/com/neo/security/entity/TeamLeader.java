package com.neo.security.entity;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class TeamLeader 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int tId;
	private String tName;
	private String tMail;
	private long tSalary;
	
	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL , mappedBy="teamLeader")
	private List<Employee> employee;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Project project;

}
