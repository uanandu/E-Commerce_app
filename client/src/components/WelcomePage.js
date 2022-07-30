import React from "react";
import styled from "styled-components";
const WelcomePage = () => {
  return (
    <>
      <div>placeholder Navbar component</div>
      <Wrapper>
        <Welcome> What you need, we have! </Welcome>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://images.pexels.com/photos/346752/pexels-photo-346752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Welcome = styled.h1`
  background-color: rgba(248, 37, 37, 0.7);
  padding: 25px;
  border-radius: 50%;
`;
export default WelcomePage;
