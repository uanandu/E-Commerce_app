import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { BiHomeAlt } from "react-icons-kit";

//The sidebar will function a bit like a navbar.
//it will be on the left side with buttons that link to the home.

const SideBar = () => {
  return (
    <SideBarContainer>
      <ButtonWrapper>
        <StyledNavlink to="/">
          <StyledButton>
            {/* <BiHomeAlt /> */}
            Home
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
  height: 100vh;
  width: 10vw;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60vw;
  margin-bottom: 5vh;
`;
const StyledButton = styled.button`
  background-color: black;
  border: none;
  padding: 10px 50px;
  color: white;
`;
const StyledNavlink = styled(NavLink)``;
export default SideBar;
