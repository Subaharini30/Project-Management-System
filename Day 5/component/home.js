import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './sidebardata';
import { SubMenu } from './submenu';
import { IconContext } from 'react-icons/lib';
import '../styles/home.css';

const Nav = styled.div
` background: #03001e;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #fdeff9, #ec38bc, #7303c0, #03001e);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #fdeff9, #ec38bc, #7303c0, #03001e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height:fit-content
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

const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <div className='entire'>
          <Nav>
            <NavIcon to='#'>
              <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
          </Nav>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to='#'>
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </NavIcon>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
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
        </div>
      </IconContext.Provider>
      <div className='side'>
        <h1 >
          <marquee>CUSTOMIZE YOUR VIEW !!! <br></br>EXECUTE IT !!!<br></br>  SOLVE IT !!!</marquee>
        </h1>
      </div>
    </>
  );
};

export default Home;
