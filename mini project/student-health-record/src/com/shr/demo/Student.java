package com.shr.demo;

public class Student
{
	private int studentId;
	private String name;
	private String gender;
	private int age;
	private String grade;
	private int number;
	private double height;
	private double weight;
	
	public int getStudentId() 
	{
		return studentId;
	}
	public void setStudentId(int studentId) 
	{
		this.studentId = studentId;
	}
	public String getName() 
	{
		return name;
	}
	public void setName(String name)
	{
		this.name = name;
	}
	public String getGender() 
	{
		return gender;
	}
	public void setGender(String gender) 
	{
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age)
	{
		this.age = age;
	}
	public String getGrade() 
	{
		return grade;
	}
	public void setGrade(String grade)
	{
		this.grade = grade;
	}
	public int getNumber() 
	{
		return number;
	}
	public void setNumber(int number) 
	{
		this.number = number;
	}
	public double getHeight() 
	{
		return height;
	}
	public void setHeight(double height) 
	{
		this.height = height;
	}
	public double getWeight()
	{
		return weight;
	}
	public void setWeight(double weight) 
	{
		this.weight = weight;
	}
	
	public Student(int studentId, String name, String gender, int age, String grade, int number, double height,
			double weight) 
	{
		super();
		this.studentId = studentId;
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.grade = grade;
		this.number = number;
		this.height = height;
		this.weight = weight;
	}	
	
	public Student() 
	{
		super();
	}
	
	@Override
	public String toString() 
	{
		return "Student [studentId=" + studentId + ", name=" + name + ", gender=" + gender + ", age=" + age + ", grade="
				+ grade + ", number=" + number + ", height=" + height + ", weight=" + weight
				+  "]";
	}
}
