import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";
import { briefcase } from "react-icons-kit/icomoon/briefcase";
import {phone} from 'react-icons-kit/icomoon/phone'
//The sidebar will function a bit like a navbar.
//it will be on the left side with buttons that link to the home.

const SideBar = () => {

  return (
    <MainContainer>
      <SidebarContainer>
        <SideBarNavLinks to="/">
          <Icon size={35} icon={home} />
        </SideBarNavLinks>
        <SideBarNavLinks to={`/companies`}>
          <Icon size={35} icon={briefcase} />
        </SideBarNavLinks>
        <SideBarNavLinks to={`/about`}>
          <Icon size={35} icon={phone} />
        </SideBarNavLinks>
      </SidebarContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  height: 100%;
  width: 10vw;
  align-content: center;
  justify-content: center;
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

export default SideBar;
