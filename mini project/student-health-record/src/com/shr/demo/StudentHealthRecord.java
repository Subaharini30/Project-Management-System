package com.shr.demo;

import java.util.Scanner;

public class StudentHealthRecord extends StudentDB
{
	static MedicalInterface medicals=new MedicalDB();
	public static void main(String args[])
	{
		System.out.println("Welcome to Student Health Report Management !!!\n");
		Scanner s = new Scanner(System.in);
		while (true) 
		{
			System.out.println("Enter 1 for student record");
			System.out.println("Enter 2 for medical record");
			System.out.println("Enter 3 to exit...");

			int c = s.nextInt();
			if (c == 1)
			{
				while (true)
				{
					System.out.println("Enter 1 to add student");
					System.out.println("Enter 2 to get student details");
					System.out.println("Enter 3 to update student");
					System.out.println("Enter 4 to delete student");
					System.out.println("Enter 5 to exit from student records...........");

					int sc = s.nextInt();
					if (sc == 1) 
					{
						System.out.println("Enter student ID : ");
						int studentId = s.nextInt();
						s.nextLine();
						System.out.println("Enter student name : ");
						String name = s.nextLine();
						System.out.println("Enter gender of a student : ");
						String gender = s.nextLine();
						System.out.println("Enter the age of student : ");
						int age = s.nextInt();
						s.nextLine();
						System.out.println("Enter the grade of student : ");
						String grade = s.nextLine();
						System.out.println("Enter the contact number of student : ");
						int number = s.nextInt();
						System.out.println("Enter the height of student : ");
						double height = s.nextDouble();
						System.out.println("Enter the weight of student : ");
						double weight = s.nextDouble();

						Student st = new Student(studentId, name, gender, age, grade, number, height, weight);
						boolean res = StudentDB.insertStudentRecord(st);
						if (res)
						{
							System.out.println("Student records are added successfully...\n");
						} 
						else 
						{
							System.out.print("Student details are not inserted!!!!!!!!!!\n");
						}
					} 
					else if (sc == 2) 
					{
						StudentDB.displayAllStudentRecords();
					} 
					else if (sc == 3) 
					{
						while (true) 
						{
							System.out.println("Enter 1 to update age");
							System.out.println("Enter 2 to update grade");
							System.out.println("Enter 3 to update phone number");
							System.out.println("Enter 4 to update Height");
							System.out.println("Enter 5 to update Weight");
							System.out.println("Enter 6 to exit updation process!!!!!!!!!");

							int us = s.nextInt();
							if (us == 1) 
							{
								// update age
								System.out.println("Enter age :\n");
								int age = s.nextInt();
								System.out.println("Enter Student ID to identify the student :\n");
								int id = s.nextInt();
								Student st = new Student();
								st.setAge(age);
								boolean res = StudentDB.updateStudentAge(age, id, st);
								if (res)
								{
									System.out.println("Student's age is updated\n");
								} 
								else 
								{
									System.out.println("Sorry updation failed\n");
								}
							} 
							else if (us == 2)
							{
								// update grade
								System.out.println("Enter grade :\n");
								s.nextLine();
								String grade = s.nextLine();
								System.out.println("Enter Student ID to identify the student :\n");
								int id = s.nextInt();
								Student st = new Student();
								st.setGrade(grade);
								boolean res = StudentDB.updateStudentGrade(grade, id, st);
								if (res)
								{
									System.out.println("Student's Grade is updated\n");
								} 
								else
								{
									System.out.println("Sorry updation failed\n");
								}

							} 
							else if (us == 3)
							{
								// update phone number
								System.out.println("Enter phone number :\n");
								int number = s.nextInt();
								System.out.println("Enter Student ID to identify the student :\n");
								int id = s.nextInt();
								Student st = new Student();
								st.setNumber(number);
								boolean res = StudentDB.updateStudentNumber(number, id, st);
								if (res)
								{
									System.out.println("Student's contact details is updated\n");
								}
								else 
								{
									System.out.println("Sorry updation failed\n");
								}

							}
							else if (us == 4) 
							{
								// update height
								System.out.println("Enter height :\n");
								double height = s.nextInt();
								System.out.println("Enter Student ID to identify the student :\n");
								int id = s.nextInt();
								Student st = new Student();
								st.setHeight(height);
								boolean res = StudentDB.updateStudentHeight(height, id, st);
								if (res) 
								{
									System.out.println("Student's height is updated\n");
								}
								else 
								{
									System.out.println("Sorry updation failed\n");
								}

							} 
							else if (us == 5)
							{
								// update weight
								System.out.println("Enter weight :\n");
								double weight = s.nextDouble();
								System.out.println("Enter Student ID to identify the student :\n");
								int id = s.nextInt();
								Student st = new Student();
								st.setWeight(weight);
								boolean res = StudentDB.updateStudentWeight(weight, id, st);
								if (res) 
								{
									System.out.println("Student's age is updated\n");
								} 
								else 
								{
									System.out.println("Sorry updation failed\n");
								}

							} 
							else if (us == 6) 
							{
								System.out.println("Your records are updated and saved!!!!!!!!!!!!!\n");
								break;
							}
							else 
							{
								System.out.println("OOPS!!!!!!!!!!Enter a valid Updation choice!!!!!!!!!!\n");
							}
						}
					} 
					else if (sc == 4) 
					{
						System.out.println("Enter Student ID To Delete: ");
						int id = s.nextInt();
						boolean res1 = medicals.deleteMedicalRecordById(id);
						boolean res2 = StudentDB.deleteStudentById(id);
						if (res1 == res2) 
						{
							System.out.println("Student Of ID " + id + " Records are Deleted... \n");
						} 
						else 
						{
							System.out.println("Unable to delete Student record!!!!!!!\n");
						}
					} 
					else if (sc == 5) 
					{
						break;
					} 
					else 
					{
						System.out.print("OOPS!!!!!!!!!!!Enter a valid choice!!!!!!!!!!!\n");
					}
				}
			} 
			else if (c == 2)
			{
				while (true)
				{
					System.out.println("Enter 1 to add medical record of a student");
					System.out.println("Enter 2 to get medical record of students");
					System.out.println("Enter 3 to get medical record of a particular student");
					System.out.println("Enter 4 to update medical record of a student");
					System.out.println("Enter 5 to exit from medical  records...........");

					int mc = s.nextInt();
					if (mc == 1) 
					{
						System.out.println("Enter student ID to add medical record: ");
						int studentId = s.nextInt();
						s.nextLine();
						System.out.println("Enter the medical record ID: ");
						int medicalRecordId = s.nextInt();
						s.nextLine();
						System.out.println("Enter the date (YYYY-MM-DD): ");
						String date = s.nextLine();
						System.out.println("Enter the blood pressure: ");
						String bloodPressure = s.nextLine();
						System.out.println("Enter the allergies: ");
						String allergies = s.nextLine();

						Medical medical = new Medical(medicalRecordId, studentId, date, bloodPressure, allergies);
						boolean res = medicals.insertMedicalRecord(medical);
						if (res) 
						{
							System.out.println("Medical records are added successfully...\n");
						}
						else 
						{
							System.out.print("Medical details are not inserted!!!!!!!!!!\n");
						}
					} 
					else if (mc == 2)
					{
						medicals.displayAllRecords();
					} 
					else if(mc==3)
					{
						System.out.println("Enter student ID: ");
						int studentId = s.nextInt();
						medicals.displayAllRecords(studentId);
					}
					else if (mc == 4)
					{
						System.out.println("Enter student ID: ");
						int studentId = s.nextInt();
						s.nextLine();
						System.out.println("Enter date of record (YYYY-MM-DD): ");
						String dateStr = s.nextLine();
						System.out.println("Enter blood pressure: ");
						String bloodPressure = s.nextLine();
						System.out.println("Enter the allergies: ");
						String allergies = s.nextLine();

						Medical medical = new Medical();
						medical.setStudentId(studentId);
						medical.setDate(dateStr);
						medical.setBloodPressure(bloodPressure);
						medical.setAllergies(allergies);

						boolean res = medicals.updateMedicalRecord(medical);
						if (res) 
						{
							System.out.println(
									"Medical record for student ID " + studentId + " is updated successfully!");
						} 
						else 
						{
							System.out.println("Updation failed\n!!!!!!!!!!!!");
						}
					} 
					else if (mc == 5) 
					{
						break;
					} 
					else 
					{
						System.out.print("OOPS!!!!!!!!!!!Enter a valid choice!!!!!!!!!!!\n");
					}
				}
			}
			else if (c == 3) 
			{
				System.out.println("Your records are saved!!!!!!!!!!!!!!!!!\n");
				break;
			} 
			else 
			{
				System.out.print("OOPS!!!!!!!!!!!Enter a valid choice!!!!!!!!!!!\n");
			}
		}
		s.close();
	}
}
