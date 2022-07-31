import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Icon } from "react-icons-kit";
import {shoppingCart} from 'react-icons-kit/feather/shoppingCart';
import {home} from 'react-icons-kit/feather/home';
import {phone} from 'react-icons-kit/feather/phone';


const NavBar = () => {
return (
    <>
    <MainDiv>
        <LeftDiv>
            <Links to="/" exact>
                <Icon size={25} icon={home}/>
            </Links>
            <Links to="/about-us" exact>
                <Icon size={25} icon={phone}/>
            </Links>
            <Dropdown>
                <Button>Shop</Button>
                <DropdownContent>
                    <Li>
                        <Links to="/shop" exact>Shop All</Links>
                    </Li>
                    <Li>
                        <Links to="/all-companies" exact>Companies</Links>
                    </Li>
                    <Li>
                        <Links to="/all-categories" exact>Categories</Links>
                    </Li>
                </DropdownContent>
            </Dropdown>
        </LeftDiv>
        <RightDiv>
            <Button>
            <Links to="/checkout">
            <Icon size={25} icon={shoppingCart}/>
            </Links>
            </Button>
            <DropdownContent>
                <Li>Cart items</Li>
            </DropdownContent>
        </RightDiv>
    </MainDiv>
    </>
)
}

const Li = styled.li`
color: black;
display: block;
height: 35px;
display: flex;
align-items: center;
padding-left: 5px;

&:hover{
    background: white;
}
`
const DropdownContent = styled.ul`
visibility: hidden;
position: absolute;
background: pink;

`
const Button = styled.button`
background: none;
font-size: 16px;
border: none;

&:hover + ul{
    visibility: visible;
    display: block;
}
`

const Dropdown=styled.div`
  position: relative;
  display: inline-block;
`
const Links = styled(NavLink)`
text-decoration: none;
color: black;
margin-right: 30px;
`
const LeftDiv = styled.div`
`
const RightDiv = styled.div`
color: black;
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