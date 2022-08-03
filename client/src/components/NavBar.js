import styled from "styled-components";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ItemContext } from "../context/Context";

import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";

const NavBar = () => {
  const { cart } = useContext(ItemContext);

  let numberInCart = cart.length;

  return (
    <>
      <MainDiv>
        <LeftDiv>
          <Links to="/" exact>
            <LogoDiv>
              <NameLetters style={{backgroundColor: "white", color: "black"}}>R</NameLetters>
              <NameLetters style={{backgroundColor: "black", color: "white"}}>A</NameLetters>
              <NameLetters style={{backgroundColor: "white", color: "black"}}>L</NameLetters>
              <NameLetters style={{backgroundColor: "black", color: "white"}}>J</NameLetters>
            </LogoDiv>
          </Links>
        </LeftDiv>
        <RightDiv>
          <ImageHere src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535eb7550b76782df9e820_peep-sitting-7.svg" />
          <Links to="/checkout">
            <Icon size={50} icon={shoppingCart} />
            <NumberDiv>{numberInCart}</NumberDiv>
          </Links>
        </RightDiv>
      </MainDiv>
    </>
  );
};
const NumberDiv = styled.div`
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 15px;
  right: 70px;
`;
const LogoDiv = styled.div`
  border: 1px solid black;
  width: 150px;
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 4px 4px 4px rgba(0, 0, 0, 0.2);
  transition: 1s ease-in-out;

  &:hover {
    box-shadow: 2px 6px 4px 4px rgba(0, 0, 0, 0.3);
  }
`;

const NameLetters = styled.div`
  font-size: 2.5rem;
  border-right: 1px solid black;
  border-left: 1px solid black;
  padding: 0px 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37.5px;
`

const Links = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin-right: 30px;
`;
const LeftDiv = styled.div`
  display: flex;
  align-items: center;
`;
const RightDiv = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40vw;
`;

const MainDiv = styled.div`
  position: fixed;
  background: white;
  height: 70px;
  width: 100%;
  color: black;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 50px;
  justify-content: space-between;
  z-index: 5;
  border-bottom: 1px solid black;
`;

const ImageHere = styled.img`
margin-top: 45px;
left: -20vw;
  width: 50px;
  height: auto;
  object-fit: contain;
`;
export default NavBar;
