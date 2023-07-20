package com.example.demo.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
public class Expenditure
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int exp_id;
	private int p_id;
	private String p_name;
	private double actual_cost;
	private double forecast_cost;
	
	@OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Project project;
}
