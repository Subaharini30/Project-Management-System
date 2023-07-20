package com.example.demo.models;

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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class TeamLeader 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int t_id;
	private String t_name;
	private String t_mail;
	private long t_salary;

	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Project project;
	
	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL , mappedBy="teamLeader")
	private List<Employee> employee;
}
