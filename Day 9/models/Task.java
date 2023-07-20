package com.example.demo.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
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
public class Task 
{
	@Id
	private int t_id;
	private String t_name;
	private String status;
	private String t_startdate;
	private String t_enddate;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Employee employee;
}
