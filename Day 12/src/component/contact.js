import React, { Component } from 'react';
import '../styles/contact.css';
import { Link } from 'react-router-dom';

class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className='contact'>
                <div className='con-inner'>
                    <h2 style={{textAlign:'center'}}>Contact Us</h2>
                    <p>   We value your feedback, suggestions, and inquiries. If you have any questions or need assistance with our project management system, please don't hesitate to reach out to us. Our dedicated support team is here to help.</p>

                    <p>   You can contact us through the following channels:</p>

                    <p>   Email: support@example.com</p>
                    <p>   Phone: [+1-XXX-XXX-XXXX]</p>
                    <p>   Address: [123 Main Street, City, State, ZIP]</p>

                    <p>   Additionally, you can connect with us on social media:</p>

                    <p>   Facebook: facebook.com/yourprojectmanagementsystem</p>
                    <p>   Twitter: @yourprojectsystem</p>
                    <p>   LinkedIn: linkedin.com/company/yourprojectmanagementsystem</p>

                    <p>   We look forward to hearing from you and assisting you with your project management needs. Your success is our priority, and we are committed to providing exceptional support and service.</p>
                    </div>
                    <Link to='/ehome'><h3 style={{float:'right',paddingRight:'70px'}}>return back</h3></Link>
            </div>
            </>
        );
    }
}
 
 export default Contact;