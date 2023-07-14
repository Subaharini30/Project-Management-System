import React from "react";
import '../styles/update.css'

export const UpdatePro = (props) =>{

	return(
		<div className="App">
            <h2>Profile Update</h2>
            <form className="fupdate">
                <label> Address: </label>
				<input name="adress" id="address" type="text" placeholder="address"/>

				<label  > Add Contact Number : </label>
				<input type="number" placeholder="add contact number" id="number" name="number"/>

				<label> Add Email ID : </label>
				<input type="email" placeholder="mail@gmail.com" id="mail" name="mail"/>

                <label> Update Qualification : </label>
				<input name="qual" id="qual" type="text" placeholder="Qualification"/>

                <label>Acheivements : </label>
				<input name="achieve" id="achieve" type="text" placeholder="acheivments"/>

				<button type="submit">Update</button>
			</form>		
		</div>
	)
}