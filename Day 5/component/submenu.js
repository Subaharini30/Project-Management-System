import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
    display: flex;
    color: black;
    justify-content: space-between;
    align-item: center;
    padding: 20px;
    list-style: none;
    heigth: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #E6E6FA;
        border-left: 5px solid 	aqua;
        cursor: pointer;
    }

`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

export const SubMenu = ({ item }) => {

    const [subnav,setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav)

    return(
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav} >
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
            </SidebarLink>
        </>
    );
};