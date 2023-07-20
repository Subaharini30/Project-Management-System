package com.example.demo.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
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
public class Employee 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int emp_id;
	private String emp_name;
	private String emp_mail;
	private long emp_salary;
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private String eq_id;
	private String eq_type;
	private String eq_model;
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private TeamLeader teamLeader;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL,mappedBy="employee")
    private Task task;
}
