package com.shr.demo;

public class Medical
{
	
	private int medicalRecordId;
	private int studentId;
	private String date;
	private String bloodPressure;
	private String allergies;

	public int getMedicalRecordId() 
	{
		return medicalRecordId;
	}
	public void setMedicalRecordId(int medicalRecordId) 
	{
		this.medicalRecordId = medicalRecordId;
	}
	public int getStudentId() 
	{
		return studentId;
	}
	public void setStudentId(int studentId) 
	{
		this.studentId = studentId;
	}
	public String getDate() 
	{
		return date;
	}
	public void setDate(String date) 
	{
		this.date = date;
	}
	public String getBloodPressure() 
	{
		return bloodPressure;
	}
	public void setBloodPressure(String bloodPressure) 
	{
		this.bloodPressure = bloodPressure;
	}
	public String getAllergies() 
	{
		return allergies;
	}
	public void setAllergies(String allergies) 
	{
		this.allergies = allergies;
	}
	
	public Medical(int medicalRecordId, int studentId, String date, String bloodPressure, String allergies) 
	{
		super();
		this.medicalRecordId = medicalRecordId;
		this.studentId = studentId;
		this.date = date;
		this.bloodPressure = bloodPressure;
		this.allergies = allergies;
	}
	
	public Medical() 
	{
		super();
	}
	
	@Override
	public String toString() 
	{
		return "MedicalDB [medicalRecordId=" + medicalRecordId + ", studentId=" + studentId + ", date=" + date
				+ ", bloodPressure=" + bloodPressure + ", allergies=" + allergies + "]";
	}
}
