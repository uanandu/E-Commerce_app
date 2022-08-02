import styled from "styled-components";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ItemContext } from "../context/Context";

import { Icon } from "react-icons-kit";
import {shoppingCart} from 'react-icons-kit/feather/shoppingCart';

const NavBar = () => {

    const {cart} = useContext(ItemContext);

    let numberInCart = cart.length;

return (
    <>
    <MainDiv>
        <LeftDiv>
            <Links to="/" exact>
                <Home>Co</Home>
            </Links>
        </LeftDiv>
        <RightDiv>
            <Links to="/checkout">
            <Icon size={50} icon={shoppingCart}/>
            <NumberDiv>{numberInCart}</NumberDiv>
            </Links>
        </RightDiv>
    </MainDiv>
    </>
)
}
const NumberDiv = styled.div`
background: black;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size:10px;
border-radius:50%;
width: 25px;
height: 25px;
position:absolute;
top: 15px;
right: 70px;
`
const Home = styled.h1`
font-style: italic;

&:hover{
    color: #ffb346;
}
`

const Links = styled(NavLink)`
text-decoration: none;
color: black;
margin-right: 30px;
`
const LeftDiv = styled.div`
display: flex;
align-items: center;
`
const RightDiv = styled.div`
color: black;
display: flex;
align-items: center;
`
const MainDiv = styled.div`
position: fixed;
background: white;
height: 70px;
width: 100%;
color: black;
display: flex;
align-items: center;
padding-left: 50px;
padding-right: 50px;
justify-content: space-between;
z-index: 5;
`
export default NavBar;