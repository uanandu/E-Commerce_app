import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Icon } from "react-icons-kit";
import {shoppingCart} from 'react-icons-kit/feather/shoppingCart';

const NavBar = () => {
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
            <Icon size={32} icon={shoppingCart}/>
            <NumberDiv>10</NumberDiv>
            </Links>
        </RightDiv>
    </MainDiv>
    </>
)
}
const NumberDiv = styled.div`
background: red;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size:10px;
border-radius:50%;
width: 20px;
height: 20px;
position:absolute;
top: 15px;
right: 70px;
`
const Home = styled.h1`
font-style: oblique;

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
background: white;
height: 70px;
color: black;
display: flex;
align-items: center;
padding-left: 50px;
padding-right: 50px;
justify-content: space-between;
`
export default NavBar;