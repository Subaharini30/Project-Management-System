import React, { useState } from 'react';
import '../styles/main.css';
import { Link } from 'react-router-dom';

function Main() {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="main">
      <header className="maincon">
        <h1 style={{paddingBottom:'30%'}}><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br></br>Project Managament System</h1>
        <div className="role-selection" >
          <h3 style={{paddingBottom:'90px',fontSize:'30px',color:'black'}}>May I know who are you?</h3>
          <div className="btns">
              <button
                className={`role_btns ${selectedRole === 'Manager' ? 'selected' : ''}`}
                onClick={() => handleRoleSelection('Manager')}>
              <Link to='/mlogin' style={{color:'black',textDecoration:'none'}}>
                Manager
              </Link>
              </button>
                <br></br>
              <button className={`role_btns ${selectedRole === 'Employee' ? 'selected' : ''}`} onClick={() => handleRoleSelection('Employee')}>
                <Link to='/elogin'style={{color:'black',textDecoration:'none'}} >
                  Employee
                </Link>
              </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Main;
