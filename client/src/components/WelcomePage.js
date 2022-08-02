
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      {/* <div>placeholder Navbar component</div> */}
      <Wrapper>
        <LeftDiv>
          <SvgImage src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e5362699b55b0dd645865f7_peep-standing-18.png"/>
        </LeftDiv>
        <RightDiv>
          <InsideRightDiv>
            <TextTop>
              <div>
                <span>Being</span>
                <span>Your Best</span>
              </div>
            </TextTop>
            <TextBottom>
              <div>
                <span>Gadget</span>
                <span>Shop </span>
              </div>
            </TextBottom>
          </InsideRightDiv>
        </RightDiv>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
position: relative;
  width: 100vw;
  height: 100vh;
  top: 7.79vh;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;
`;

const SvgImage = styled.img`
  position: relative;
  width: auto;
  height: 60vh;
  z-index: 20;
  animation: fadeIn 2s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const LeftDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center; 
  align-items: center;
  justify-content: center;
`

const InsideRightDiv = styled.div`
color: white;
  font-family: monospace, Arial, sans-serif;
  height: 90vmin;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-30%, -50%);
  width: 90vmin;

  & > div {
    height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
  }

  & > div > div {
    font-size: 12vmin;
  padding: 2vmin 0;
  position: absolute;
  }

  & > div > div > span {
    display: block;  
  }


`

const TextTop = styled.div`
 border-bottom: 1vmin solid lightgray;
  top: 0;

  & > div {
    animation: showTopText 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translate(0, 100%);
  }

  & > div > span:first-child {
    color: #767676;
  }

@keyframes showTopText {
  0% { transform: translate3d(0, 100%, 0); }
  40%, 60% { transform: translate3d(0, 50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
`

const TextBottom = styled.div`
  bottom: 0;

  & > div {
    animation: showBottomText 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
  }


@keyframes showBottomText {
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
`

const RightDiv = styled.div`
  background-color: black;
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
`

export default WelcomePage;

