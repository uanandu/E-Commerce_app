import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";

//The sidebar will function a bit like a navbar.
//it will be on the left side with buttons that link to the home.

const SideBar = () => {
  return (
    <SideBarContainer>
      <ButtonWrapper>
        <StyledNavlink to="/">
          <StyledButton>
            <Icon size={35} icon={home} />
          </StyledButton>
        </StyledNavlink>
      </ButtonWrapper>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #ff9966;
  height: 100%;
  width: 10vw;
  align-content: center;
  justify-content: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  /* width: 60vw; */
  /* margin-bottom: 5vh; */
`;
const StyledButton = styled.button`
  background-color: black;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 50%;
  margin: 20px;
`;
const StyledNavlink = styled(NavLink)``;
export default SideBar;
