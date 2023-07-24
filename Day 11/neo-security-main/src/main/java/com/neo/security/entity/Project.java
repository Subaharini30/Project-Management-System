package com.neo.security.entity;

import java.sql.Date;
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
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Project 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int pId;
	private String pName;
	private String pDescription;
	private int pBudget;
	private Date pStdate;
	private Date pEndate;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL, mappedBy="project")
    private Expenditure expenditure;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL, mappedBy="project")
    private Report report;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL, mappedBy="project")
    private TeamLeader tl;
	
	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL , mappedBy="project")
	private List<Risk> risk;
	
	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL , mappedBy="project")
	private List<Employee> employee;
}
