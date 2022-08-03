import styled from "styled-components"; // styled components
import { NavLink } from "react-router-dom"; // for nav links

// All icons shown here are from react-icons-kit
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";
import { briefcase } from "react-icons-kit/icomoon/briefcase";
import { phone } from "react-icons-kit/icomoon/phone";
import { shopping_bag } from "react-icons-kit/ikons/shopping_bag";

const SideBar = () => {
  return (
    <MainContainer>
      <SidebarContainer>
        <IconHere>
          <SideBarNavLinks to="/shop">
            <Icon size={35} icon={home} />
          </SideBarNavLinks>
          <h3>Shop</h3>
        </IconHere>
        <IconHere>
          <SideBarNavLinks to={`/companies`}>
            <Icon size={35} icon={briefcase} />
          </SideBarNavLinks>
          <h3>Companies</h3>
        </IconHere>
        <IconHere>
          <SideBarNavLinks to={`/about`}>
            <Icon size={35} icon={phone} />
          </SideBarNavLinks>
          <h3>About</h3>
        </IconHere>
        <IconHere>
          <SideBarNavLinks to={`/previous-purchases`}>
            <Icon size={35} icon={shopping_bag} />
          </SideBarNavLinks>
          <h3>Orders</h3>
        </IconHere>
        <ImageHere src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535e872b568af61d1d1e65_peep-sitting-5.png" />
      </SidebarContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: fixed;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 10vw;
  height: 100%;
  top: 4vh;
  margin-top: 20px;
  border-right: 1px solid black;
  z-index: 1;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const IconHere = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: slide-in 1s ease-in-out;

  @keyframes slide-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }
`;

const SideBarNavLinks = styled(NavLink)`
  width: 60px;
  height: 60px;
  color: black;
  box-shadow: 2px 4px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 10px;
  transition: 0.5s ease-in-out;

  &:hover {
    box-shadow: 2px 6px 2px 2px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const ImageHere = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-top: 300px;
`

export default SideBar;