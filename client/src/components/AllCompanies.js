import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { ItemContext } from "../context/Context";

import Icon from "react-icons-kit";
import { userTie } from "react-icons-kit/icomoon/userTie";

const AllCompanies = () => {
  const { companies } = useContext(ItemContext);

  return (
    <Wrapper>
      <BackgroundImage>
        <GridContainer>
          {companies.map((company) => {
            return (
              <Links to={`/companies/${company._id}`}>
                <CompanyDiv>
                  <CompanyName>{company.name}</CompanyName>
                  <CompanyCountry>{company.country}</CompanyCountry>
                  <CompanyUrl>{company.url}</CompanyUrl>
                </CompanyDiv>
                <Icon
                  size={25}
                  icon={userTie}
                  style={{ paddingRight: "10px", paddingTop: "10px" }}
                />
              </Links>
            );
          })}
        </GridContainer>
      </BackgroundImage>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 6vh;
  left: 10vw;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const BackgroundImage = styled.div`
  background-image: url("https://i.pinimg.com/736x/82/6a/95/826a95fde43be06c60b5c1f5349587c3.jpg");
  background-repeat: repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Links = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: black;
  width: 300px;
  height: 150px;
  margin: 15px auto;
  border: 2px solid black;
  transition: 0.5s ease-in-out;
  background-color: #fefbea;
  &:hover {
    box-shadow: 2px 6px 2px 2px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  background-color: transparent;
  gap: 100px;
`;

const CompanyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  height: 100%;
  padding: 10px;
`;

const CompanyName = styled.h2`
  font-family: var(--tertiary-font-family);
`;
const CompanyCountry = styled.h3`
  font-family: var(--tertiary-font-family);
`;
const CompanyUrl = styled.p`
  font-family: var(--tertiary-font-family);
`;

export default AllCompanies;
