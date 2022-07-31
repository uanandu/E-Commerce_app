import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      {/* <div>placeholder Navbar component</div> */}
      <Wrapper>
        <TopDiv>
          <P>The long wait is over</P>
          <H1> New Collection </H1>
          <Img src="https://cdn.discordapp.com/attachments/1002641115519909989/1003339376941596833/Red_and_Orange_Hand_Drawn_Supplies_Back_to_School_Welcome_Banner.png" />
          <H2>A thoughtfull combination of design and function</H2>
        </TopDiv>
        <BottomDiv>
          <ButtonWrapper>
            <StyledNavlink to="/shop">
              <StyledButton>Shop</StyledButton>
            </StyledNavlink>
            <StyledNavlink to="/about-us">
              <StyledButton>About</StyledButton>
            </StyledNavlink>
          </ButtonWrapper>
          <Img2 src="https://images-ext-1.discordapp.net/external/RxpCPyZiOfEw9uHAdV_XYAj2sQDzu9xC4QrQbymSzGA/https/42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/v2/undraw_social_20.png?width=1080&height=540" />
        </BottomDiv>
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
