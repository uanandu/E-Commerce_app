import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      {/* <div>placeholder Navbar component</div> */}
      <Wrapper>
          Here we will be putting stuff...
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ff9966;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-around;
`;

const H1 = styled.h1`
  /* background-color: rgba(248, 37, 37, 0.7);
  padding: 25px;
  border-radius: 50%; */
  color: black;
`;

const P = styled.p`
  color: black;
  font-size: 25px;
`;

const H2 = styled.h2`
  color: black;
`;

const Img = styled.img`
  border: 2px, black, solid;
  width: 60vw;
  height: 30vh;
  /* background-position: center; */
  object-fit: cover;
`;
const Img2 = styled.img`
  border: 2px, black, solid;
  width: 60vw;
  height: 30vh;
  object-fit: cover;
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

const TopDiv = styled.div`
  width: 60vw;
`;
const BottomDiv = styled.div`
  width: 60vw;
`;

const StyledNavlink = styled(NavLink)``;

export default WelcomePage;
