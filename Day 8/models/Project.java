package com.example.demo.models;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Project 
{
	@Id
	private int p_id;
	private String p_name;
	private String p_description;
	private long budget;
	private String st_date;
	private String en_date;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL, mappedBy="project")
    private Expenditure expenditure;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL, mappedBy="project")
    private Report report;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL, mappedBy="project")
    private TeamLeader tl;
	
	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL , mappedBy="project")
	private List<Risk> risk;
}
