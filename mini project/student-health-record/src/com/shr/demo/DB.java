package com.shr.demo;

import java.sql.*;

public class DB 
{
	static Connection con;
	public static Connection createc() 
	{	
		try 
		{
			//load the driver
			Class.forName("com.mysql.cj.jdbc.Driver");
			
			//create the Connection
			String user = "root"; 
			String password = "suba30nalls"; 
			String url = "jdbc:mysql://localhost:3306/miniProject";
			con = DriverManager.getConnection(url,user,password);
		}
		catch(Exception e) 
		{
			e.printStackTrace();
		}
		return con;
	}
}
