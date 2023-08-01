package com.shr.demo;

public interface MedicalInterface 
{
    boolean insertMedicalRecord(Medical medical);

    void displayAllRecords();

	void displayAllRecords(int studentId);
	
    boolean updateMedicalRecord(Medical medical);

    boolean deleteMedicalRecordById(int id);

}
