package com.shr.demo;

import java.sql.*;

public class StudentDB  
{

	public static boolean insertStudentRecord(Student st) 
	{
	    boolean f = false;
	    Connection con = null;
	    PreparedStatement pstmt = null;
	    
	    try 
	    {
	        con = DB.createc();
	        String query = "insert into student(studentId, name, gender, age, grade, number, height, weight) values(?, ?, ?, ?, ?, ?, ?, ?)";
	        pstmt = con.prepareStatement(query);
	        pstmt.setInt(1, st.getStudentId());
	        pstmt.setString(2, st.getName());
	        pstmt.setString(3, st.getGender());
	        pstmt.setInt(4, st.getAge());
	        pstmt.setString(5, st.getGrade());
	        pstmt.setInt(6, st.getNumber());
	        pstmt.setDouble(7, st.getHeight());
	        pstmt.setDouble(8, st.getWeight());

	        pstmt.executeUpdate();
	        f = true; 
	    } 
	    catch (SQLException e) 
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

	public static  void displayAllStudentRecords() 
	{
		Connection con = null;
		Statement st = null;
		try
		{
			con=DB.createc();
			String query="select * from student";
			st = con.createStatement();
			ResultSet set = st.executeQuery(query);
			
			while(set.next())
			{
				int id=set.getInt(1);
				String name=set.getString(2);
				String gender=set.getString(3);
				int age=set.getInt(4);
				String grade=set.getString(5);
				int number=set.getInt(6);
				double height=set.getDouble(7);
				double weight=set.getDouble(8);
				
				System.out.println("Student ID : "+id);
				System.out.println("Student name : "+name);
				System.out.println("Student gender : "+gender);
				System.out.println("Student age : "+age);
				System.out.println("Student grade : "+grade);
				System.out.println("Student contact information : "+number);
				System.out.println("Student height : "+height);
				System.out.println("Student weight : "+weight);
				System.out.println();
			}
		}
		catch(Exception e)
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

	public static boolean updateStudentAge(int age, int id, Student st) 
	{
		boolean f=false;
		Connection con = null;
	    PreparedStatement pstmt = null;
		try
		{
			con = DB.createc();
			String query="update student set age=? where studentId=?";
			pstmt = con.prepareStatement(query);
			pstmt.setInt(1,age);
			pstmt.setInt(2, id);
			
			pstmt.executeUpdate();
			f = true;
		}
		catch (SQLException e) 
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

	public static boolean updateStudentGrade(String grade, int id, Student st) 
	{
		boolean f=false;
		Connection con = null;
	    PreparedStatement pstmt = null;
		try
		{
			con = DB.createc();
			String query="update student set grade=? where studentId=?";
			pstmt = con.prepareStatement(query);
			pstmt.setString(1,grade);
			pstmt.setInt(2, id);
			
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

	public static boolean updateStudentNumber(int number, int id, Student st) 
	{
		boolean f=false;
		Connection con = null;
	    PreparedStatement pstmt = null;
		try
		{
			con = DB.createc();
			String query="update student set number=? where studentId=?";
			pstmt = con.prepareStatement(query);
			pstmt.setInt(1,number);
			pstmt.setInt(2, id);
			
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
	    }			return f;
	}

	public static boolean updateStudentHeight(double height, int id, Student st) 
	{
		boolean f=false;
		Connection con = null;
	    PreparedStatement pstmt = null;
		try
		{
			con = DB.createc();
			String query="update student set height=? where studentId=?";
			pstmt = con.prepareStatement(query);
			pstmt.setDouble(1,height);
			pstmt.setInt(2, id);
			
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
	    }			return f;
	}

	public static boolean updateStudentWeight(double weight, int id, Student st) 
	{
		boolean f=false;
		Connection con = null;
	    PreparedStatement pstmt = null;
		try
		{
			con = DB.createc();
			String query="update student set weight=? where studentId=?";
			pstmt = con.prepareStatement(query);
			pstmt.setDouble(1,weight);
			pstmt.setInt(2, id);
			
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
	    }			return f;
	}

	public static boolean deleteStudentById(int id) 
	{
		boolean f=false;
		Connection con = null;
	    PreparedStatement pstmt = null;
		try
		{
			con = DB.createc();
			String query = "delete from student where studentId=?";
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
