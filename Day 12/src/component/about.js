import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css'
class About extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className='about'>
                <div className='down'>
                    <h2 style={{textAlign:'center'}}>About Us</h2>
                <p>Welcome to our project management system! We are a dedicated team of professionals who are passionate about helping organizations effectively manage their projects. With years of experience in project management and software development, we understand the challenges faced by teams when it comes to planning, tracking, and collaborating on projects.</p>

                <p>Our mission is to provide a robust and user-friendly project management solution that empowers teams to streamline their workflows, improve communication, and achieve project success. We believe that effective project management is the key to driving productivity, meeting deadlines, and delivering high-quality results.</p>

                <p>Our project management system is designed to cater to the needs of various industries and project types. Whether you're working on a small internal project or managing a complex, multi-team endeavor, our platform offers the tools and features to support your project from start to finish.</p>

                <p>            We are committed to continually enhancing our system, incorporating the latest industry best practices and feedback from our valued users. Our goal is to create a reliable and efficient project management solution that helps you stay organized, collaborate seamlessly, and achieve your project goals.</p>
                </div>
                <Link to='/ehome'><h3 style={{float:'right',color:'white',paddingRight:'70px'}}>return back</h3></Link>
            </div>
            </>
        );
    }
}
 
export default About;
