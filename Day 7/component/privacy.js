import React from 'react'
import '../styles/privacy.css'

function Privacy() {
    return ( 
        <>
        <div className='privacy'>
            <div className='head'>
            <h1>
                PROJECT MANAGEMENT SYSTEM
            </h1>
            <h1 style={{fontStyle:'oblique'}}>
                PRIVACY POLICY
            </h1>
            </div>
            <div className='content1'>
                <p>
                     * This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our system and the choices you have associated with that data.
                    We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information following this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.
                </p>
                <p>
                While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data").
                Personally identifiable information may include, but is not limited to:
                <div className='list1'>
                <ul >
                    <li>
                        Name
                    </li>
                    <li>
                        Email address
                    </li>
                    <li>
                        Phone number
                    </li>
                    <li>
                        Address
                    </li>
                    <li>
                        Job title
                    </li>
                </ul>
                </div>
                </p>
                <h2 style={{color:'lightyellow'}}>
                Data security : 
                </h2>
                <p>
                    The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. 
                    While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
                <h1 className='head' style={{textAlign:'center',color:'black'}}>BELEIVE US !!!</h1>
            </div>
        </div>
        </>
     );
}

export default Privacy;