package com.neo.security.entity;

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
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Report 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int reId;
	private int pId;
	private String pName;
	private double actualCost;
	private double forecastCost;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	private Project project;
}
