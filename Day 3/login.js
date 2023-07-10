import React, { useState } from "react";

export const Login = (props) =>{
	const [email, setEmail]=useState('');
	const [password, setPass]=useState('');
	const [id, setId]=useState('');
	const [submitted, setSubmitted]=useState('');
    const [error, setError]=useState('');

    const handleSubmit = (e) =>{
		e.preventDefault();
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
			<div className="success"
				 style={{display: submitted ? '' : 'none',
					    position:'relative', 
					    top:'-50px',}}>
				<h1>User {id} has successfully Logged In:)</h1>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div className="error"
				 style={{display: error ?'': 'none',
                 textAlign:'center',
                 paddingTop:10,
				 position:'relative', 
				 top:'-50px',}}>
				<h1>Please enter all the fields :(</h1>
			</div>
		);
	};

	return(
		<div className="container">
			<h2 style={{position:'relative', 
			            top:'-50px',
						textAlign:'center',
                        color:'#FFE4B5'}}>
                PROJECT MANAGEMENT SYSTEM </h2>
			<h2 style={{position:'relative', 
			            top:'-50px',
						color:'#FFD700'}}>LOG IN</h2>

			<div className="message" >
                {errorMessage()}
                {successMessage()}
            </div>

			<form className="login" style={{position:'relative', 
			                                 top:'-50px',}}onSubmit={handleSubmit}>
				<label className="label"> UserId </label>
				<input className='input'
					   onChange={(e) => setId(e.target.value)} 
				       value={id} name="id" id="id" type="number" placeholder="userId"/>

				<label className="label" for="email" > Email </label>
				<input className='input' 
					   onChange={(e) => setEmail(e.target.value)} 
				       value={email}  type="email" placeholder="mail@gmail.com" id="email" name="email"/>

				<label className="label" for="password" > Password </label>
				<input className='input' 
					   onChange={(e) => setPass(e.target.value)} 
				       value={password} type="password" placeholder="*********" id="password" name="password"/>

				<button type="submit">Log In</button>
			</form>
			<button className="link" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
		</div>
	)
}