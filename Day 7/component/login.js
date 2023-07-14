import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/login.css';

export const Login = (props) =>{
	const [email, setEmail]=useState('');
	const [password, setPass]=useState('');
	const [id, setId]=useState('');
	const [submitted, setSubmitted]=useState('');
    const [error, setError]=useState('');

    const handleSubmit = (e) =>{
		e.preventDefault();
		console.log(email);
		console.log(id);
		if (id === '' || email === '' || password === '') {
			setError(true);
		} 
        else{
			setSubmitted(true);
			setError(false);
		}
	}

    const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? '' : 'none',}}>
				<h2 style={{color:"teal"}}>User {id} has successfully Logged In:)</h2>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div className="error"
				 style={{display: error ?'': 'none',
                 textAlign:'center',
                 paddingTop:10,}}>
				<h2 style={{color:"	teal"}}>Please enter all the fields :(</h2>
			</div>
		);
	};

	return(
		<div className="all">
		<div className="container">
			<h2 style={{color:'peachpuff'}}>PROJECT MANAGEMENT SYSTEM</h2>
			<h2>LOG IN</h2>

			<div className="message" >
                {errorMessage()}
                {successMessage()}
            </div>

			<form className="flogin" onSubmit={handleSubmit}>
				<label> UserId </label>
				<input value={id} onChange={(e) => setId(e.target.value)} name="id" id="id" type="number" placeholder="UserId" required/>

				<label for="email" > Email </label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>

				<label for="password" > Password </label>
				<input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password" re/>
				<br></br>		
						
				<Link to='/home'>
					<button type="submit" style={{padding:'20px 210px'}}>sign in</button>
				</Link>
			</form>
			<br></br>
			
			<Link style={{color:'#00FFFF'}} to='/Register'>Don't have an account? Register</Link>
		</div>
		</div>
	)
}