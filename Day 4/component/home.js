import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/home.css'

function Home() {
  return ( 
    <>
    <div className='nav2'>
            <ul className='nav-tabs'>
              <li>
                <Link to='/contact' className='link-active'>
                  Contact us
                </Link>
              </li>
              <li>
                <Link to='/about' className='link-active'>
                  About us
                </Link>
              </li>
              <li>
                <Link to='/login' className='link-active'>
                  Log out
                </Link>
              </li>
            </ul>
          </div>
    </>
   );
}

export default Home;