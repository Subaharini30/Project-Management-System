import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SidebarData } from './Asidebardata';
import { SubMenu } from './submenu';
import { IconContext } from 'react-icons/lib';
import '../styles/home.css';
import UserService from '../services/userService'
import { addUserDetails } from './Stores/masterslice'
import { useUser } from './userContext';

const Nav = styled.div
  ` background: #03001e;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #fdeff9, #ec38bc, #7303c0, #03001e);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #fdeff9, #ec38bc, #7303c0, #03001e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)
  ` margin-left: 2rem;
  font-size: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav
  ` background: #d9a7c7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #fffcdc, #d9a7c7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #fffcdc, #d9a7c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div
  ` width: 100%;
`;

const Ahome = () => {
  const dispatch = useDispatch();
  const { Emails } = useSelector((state) => state.master);
  const { Token } = useSelector((state) => state.master);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await UserService.getUserByEmail(Emails, Token);
      console.log("response", " ", response.data);
      dispatch(addUserDetails(response.data));
    }
    catch (error) {
      console.log(error);
    }
  }

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { userEmail } = useUser();
  const {user} = useSelector(state => state.master)
  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <div className='entire'>
          <Nav>
            <NavIcon to='#'>
              <FaIcons.FaBars onClick={showSidebar} />

              <div className='nav'>
                <div className='nav2'>
                  <ul class="nav-tabs">
                    <li>
                      <Link to="/contact" class="link-active">Contact us</Link>
                    </li>
                    <li>
                      <Link to='/Alogin' class="link-active" color='white'>Logout</Link>
                    </li>
                    <li style={{color:'white'}}>{userEmail}</li>
                  </ul>
                </div>
              </div>
            </NavIcon>
          </Nav>
        </div>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((items, index) => {
              return <SubMenu item={items} key={index} />
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
      <div className='body'>
        <h1 id='neon' style={{ textAlign: 'center', fontFamily: 'cursive', fontSize: '30px' }}>
          PROJECT MANAGEMENT SYSTEM
        </h1>
        <div className='content'>
          <div className='home-content'>
            <h4>
              Project Management System is the process of planning, building, and monitoring the resilience and success of a newly created landing page, or site feature.
            </h4>
            <div className='list'>
              <h4>
                i)Like other client work, project management system requires thoughtful resource allocation. <br></br>
                ii)A good project manager will balance the work-flow in various aspects like
                <ul>
                  <li>
                    SEO audits
                  </li>
                  <li>
                    QA processes
                  </li>
                  <li>
                    Bug checks—across each team members.
                  </li>
                </ul>
              </h4>
            </div>
            <h4>
              Web design project management also requires project managers to stretch the project budget across tasks and leave room for contingency expenses.lopment
            </h4>
          </div>
          <div className='footer'>
            <p style={{ paddingBottom: '90px' }}>Please read our &nbsp;
              <Link to='/privacy' style={{ color: 'powderblue' }}>privacy policy </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ahome;
