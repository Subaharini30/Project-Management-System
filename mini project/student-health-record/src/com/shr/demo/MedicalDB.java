package com.shr.demo;


import java.sql.*;

public class MedicalDB implements MedicalInterface 
{
	public boolean insertMedicalRecord(Medical medical)
	{
        boolean f = false;
        Connection con = null;
	    PreparedStatement pstmt = null;
        try 
        {
            con = DB.createc();
            String query = "INSERT INTO medical(medicalRecordId, studentId, date, bloodPressure, allergies) VALUES(?, ?, ?, ?, ?)";
            pstmt = con.prepareStatement(query);
            pstmt.setInt(1, medical.getMedicalRecordId());
            pstmt.setInt(2, medical.getStudentId());
            pstmt.setString(3, medical.getDate());
            pstmt.setString(4, medical.getBloodPressure());
            pstmt.setString(5, medical.getAllergies());

            pstmt.executeUpdate();
            f = true;
            con.close();
        } 
        catch (Exception e) 
        {
            e.printStackTrace();
        }
        finally 
	    {
	        try 
	        {
	            if (pstmt != null) 
	            {
	                pstmt.close();
	            }
	            if (con != null) 
	            {
	                con.close();
	            }
	        } 
	        catch (Exception e) 
	        {
	            e.printStackTrace();
	        }
	    }	   
        
        return f;
    }

	 public void displayAllRecords() 
    {
    	Connection con = null;
	    Statement st = null;
        try 
        {
            con = DB.createc();
            String query = "SELECT * FROM medical";
            st = con.createStatement();
            ResultSet set = st.executeQuery(query);

            while (set.next()) 
            {
                int medicalRecordId = set.getInt(1);
                int studentId = set.getInt(2);
                Date date = set.getDate(3);
                String bloodPressure = set.getString(4);
                String allergies = set.getString(5);

                System.out.println("Medical Record ID: " + medicalRecordId);
                System.out.println("Student ID: " + studentId);
                System.out.println("Date: " + date);
                System.out.println("Blood Pressure: " + bloodPressure);
                System.out.println("Allergies: " + allergies);
                System.out.println();
            }
            con.close();
        } 
        catch (Exception e) 
        {
            e.printStackTrace();
        }
        finally 
	    {
	        try 
	        {
	            if (st != null) 
	            {
	                st.close();
	            }
	            if (con != null) 
	            {
	                con.close();
	            }
	        } 
	        catch (Exception e) 
	        {
	            e.printStackTrace();
	        }
	    }	   
    }
	 
	 public void displayAllRecords(int studId) 
	    {
	    	Connection con = null;
		    PreparedStatement st = null;
	        try 
	        {
	            con = DB.createc();
	            String query = "SELECT * FROM medical where studentId=?";
	            st = con.prepareStatement(query);
	            st.setInt(1, studId);
	            ResultSet set = st.executeQuery();

	            if (set.next()) 
	            {
	                int medicalRecordId = set.getInt(1);
	                int studentId = set.getInt(2);
	                Date date = set.getDate(3);
	                String bloodPressure = set.getString(4);
	                String allergies = set.getString(5);

	                System.out.println("Medical Record ID: " + medicalRecordId);
	                System.out.println("Student ID: " + studentId);
	                System.out.println("Date: " + date);
	                System.out.println("Blood Pressure: " + bloodPressure);
	                System.out.println("Allergies: " + allergies);
	                System.out.println();
	            }
	            con.close();
	        } 
	        catch (Exception e) 
	        {
	            e.printStackTrace();
	        }
	        finally 
		    {
		        try 
		        {
		            if (st != null) 
		            {
		                st.close();
		            }
		            if (con != null) 
		            {
		                con.close();
		            }
		        } 
		        catch (Exception e) 
		        {
		            e.printStackTrace();
		        }
		    }	   
	    }
	 
    public boolean updateMedicalRecord(Medical medical) 
    {
        boolean f = false;
        Connection con = null;
	    PreparedStatement pstmt = null;
        try {
            con = DB.createc();
            String query = "UPDATE medical SET date=?, bloodPressure=?, allergies=? WHERE studentId=?";
            pstmt = con.prepareStatement(query);
            pstmt.setString(1, medical.getDate());
            pstmt.setString(2, medical.getBloodPressure());
            pstmt.setString(3, medical.getAllergies());
            pstmt.setInt(4, medical.getStudentId());

            pstmt.executeUpdate();
            f = true;
            con.close();
        } 
        catch (Exception e) 
        {
            e.printStackTrace();
        }
        finally 
	    {
	        try 
	        {
	            if (pstmt != null) 
	            {
	                pstmt.close();
	            }
	            if (con != null) 
	            {
	                con.close();
	            }
	        } 
	        catch (Exception e) 
	        {
	            e.printStackTrace();
	        }
	    }	   
        return f;
    }

	public boolean deleteMedicalRecordById(int id) 
	{
		boolean f=false;
		Connection con = null;
	    PreparedStatement pstmt = null;
		try
		{
			con = DB.createc();
			String query = "delete from medical where studentId=?";
			pstmt = con.prepareStatement(query);
			pstmt.setInt(1,id);

			pstmt.executeUpdate();
			f = true;
			con.close();
		}
		catch(Exception e)
		{
			 e.printStackTrace();
		}
		finally 
	    {
	        try 
	        {
	            if (pstmt != null) 
	            {
	                pstmt.close();
	            }
	            if (con != null) 
	            {
	                con.close();
	            }
	        } 
	        catch (Exception e) 
	        {
	            e.printStackTrace();
	        }
	    }	   
		return f;
	}
}
