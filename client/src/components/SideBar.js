import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";
import { briefcase } from "react-icons-kit/icomoon/briefcase";
import {phone} from 'react-icons-kit/icomoon/phone'
import {shopping_bag} from 'react-icons-kit/ikons/shopping_bag'
//The sidebar will function a bit like a navbar.
//it will be on the left side with buttons that link to the home.

const SideBar = () => {

  return (
    <MainContainer>
      <SidebarContainer>
        <IconHere>        
          <SideBarNavLinks to="/shop">
            <Icon size={35} icon={home} />
          </SideBarNavLinks>
          <h3>Shop</h3>
        </IconHere>
        <IconHere>
          <SideBarNavLinks to={`/companies`}>
            <Icon size={35} icon={briefcase} />
          </SideBarNavLinks>
          <h3>Companies</h3>
        </IconHere>
        <IconHere>
          <SideBarNavLinks to={`/about`}>
            <Icon size={35} icon={phone} />
          </SideBarNavLinks>
          <h3>About</h3>
        </IconHere>
        <IconHere>
          <SideBarNavLinks to={`/previous-purchases`}>
            <Icon size={35} icon={shopping_bag} />
          </SideBarNavLinks>
          <h3>Orders</h3>
        </IconHere>
      </SidebarContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
   position: fixed;
   background-color: #ff9966;
    padding: 0 25px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 10vw;
    height: 100%;
    top: 6vh;
    margin-top: 20px;
    border-right: 1px solid lightgray;
    z-index: 1;

`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const SideBarNavLinks = styled(NavLink)`
  background-color: gold;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: black;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 10px;
  transition: 0.5s ease-in-out;

  &:hover {
    box-shadow: 2px 6px 2px 2px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const IconHere = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default SideBar;
