import React, { useState } from "react";

export const Register = (props) =>
{
    const [email, setEmail]=useState('');
    const [password, setPass]=useState('');
    const [name, setName]=useState('');
    const [profession, setPro]=useState('');
    const [dob, setDob]=useState('');
    const [number, setNum]=useState('');

    const [submitted, setSubmitted]=useState('');
    const [error, setError]=useState('');

    const handleSubmit = (e) =>
    {
	e.preventDefault();
	if (name === '' || email === '' || password === '' || profession==='' || dob==='' || number==='')
       {
		setError(true);
	} 
        else
        {
		setSubmitted(true);
		setError(false);
	}
    }

    const successMessage = () => 
    {
	return (
		<div className="success"
			style={{display: submitted ? '' : 'none',
                             position:'relative', 
                             top:'-50px',}}>
		       <h1>User {name} has successfully registered :)</h1>
		</div>
		);
    };

	const errorMessage = () =>
       {
		return (
			<div className="error"
			      style={{display: error ?'': 'none',
                           textAlign:'center',
                           paddingTop:10,
                           position:'relative', 
                           top:'-50px'}}>
			      <h1>Please enter all the fields :(</h1>
			</div>
		);
	};

	return(
		<div className="container">
                     <h2 style={{position:'relative', top:'-50px',textAlign:'center',
                            color:'#FFE4B5'}}>
                          PROJECT MANAGEMENT SYSTEM </h2>
                     <h2 style={{position:'relative',
                                 top:'-50px',
                                 color:'#FFD700'}}>USER REGISTRATION FORM</h2>
                            <div className="message" >
                                   {errorMessage()}
                                   {successMessage()}
                            </div>
                     <form className="register" style={{position:'relative', 
                                                        top:'-50px'}} onSubmit={handleSubmit}>
                            <label> Username :</label>
                            <input value={name} 
                                   onChange={(e) => setName(e.target.value)} 
                                   name="name" id="name" type="text" placeholder="full Name"/>
                            <br></br>
                            
                            <label for="email" > Email :</label>
                            <input value={email} 
                                   onChange={(e) => setEmail(e.target.value)} 
                                   type="email" placeholder="mail@gmail.com" id="email" name="email"/>
                            <br></br>
                            
                            <label for="password" > Password :</label>
                            <input value={password} 
                                   onChange={(e) => setPass(e.target.value)} 
                                   type="password" placeholder="*********" id="password" name="password"/>
                            <br></br>
                            
                            <label> Profession :</label>
                            <input value={profession} 
                                   onChange={(e) => setPro(e.target.value)} 
                                   name="position" id="position" type="text" placeholder="profession"/>
                            <br></br>
                            
                            <label>Date of Birth :</label>
                            <input value={dob} 
                                   onChange={(e) => setDob(e.target.value)} 
                                   name="dob" id="dob" type="date" placeholder="date of Birth"/>
                            <br></br>
                            
                            <label>Contact Information :</label>
                            <input value={number} 
                                   onChange={(e) => setNum(e.target.value)} 
                                   name="number" id="number" type="number" placeholder="mobile Number"/>
                            <br></br>
                            <button type="submit">Register</button>
                     </form>
                     <button className="link" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here </button>
		</div>
	)
}