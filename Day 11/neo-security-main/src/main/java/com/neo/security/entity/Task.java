package com.neo.security.entity;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
public class Task 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int taId;
	private String taName;
	private String taStatus;
	private Date taStartdate;
	private Date taEnddate;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Employee employee;
	
	}
