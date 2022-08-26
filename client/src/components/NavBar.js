import styled from "styled-components"; // styled-components
import { useContext } from "react"; // useContext
import { NavLink } from "react-router-dom"; // for nav links

import { ItemContext } from "../context/Context"; // for item context

import { Icon } from "react-icons-kit"; // for icons
import { shoppingCart } from "react-icons-kit/feather/shoppingCart"; // for shopping cart icon

const NavBar = () => {
  const { cart } = useContext(ItemContext); // for cart from context

  let numberInCart = cart.length; // for number in cart

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
            <CartDiv>
              <CartImageHere src="https://media.giphy.com/media/1fj851fawh14uU0rUM/giphy.gif" />
              <p>Go to cart</p>
            </CartDiv>
            
          </Links>
        </RightDiv>
      </MainDiv>
    </>
  );
};

// styled components

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

const LeftDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Links = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin-right: 30px;
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
const RightDiv = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40vw;
`;

const ImageHere = styled.img`
margin-top: 45px;
left: -20vw;
  width: 50px;
  height: auto;
  object-fit: contain;
`;

const CartDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`

const CartImageHere = styled.img`
margin-top: 10px;
right: 10vw;
  width: 75px;
  height: auto;
  object-fit: contain;
`;

export default NavBar;
