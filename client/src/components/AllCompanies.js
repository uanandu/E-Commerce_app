
import styled from "styled-components"; // styled-components
import { NavLink } from "react-router-dom"; // for nav links
import { useContext } from "react"; // useContext

import { ItemContext } from "../context/Context"; // for item context

// show all companies with basic information as a business card
const AllCompanies = () => {
  // getting all companies from context
  const { companies } = useContext(ItemContext);

  return (
    <Wrapper>
      <BackgroundImage>
        <GridContainer>
          {companies.map((company) => {
            return (
              <BusinessCardButton>
                <Links to={`/companies/${company._id}`}>
                  <CompanyDiv>
                    <CompanyName>{company.name}</CompanyName>
                    <CompanyCountry>{company.country}</CompanyCountry>
                    <CompanyUrl>{company.url}</CompanyUrl>
                  </CompanyDiv>
                </Links>
              </BusinessCardButton>
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  background-color: transparent;
  gap: 100px;
`;

const BusinessCardButton = styled.button`
  display: block;
  position: relative;
  background: none;
  color: #191919;
  border: none;
  padding: 0;
  font: inherit;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5),
    -1px -1px 1px rgba(179, 179, 179, 0.5), 1px 1px 0 rgba(255, 255, 255, 0.55),
    0 1px 3px white;
  cursor: pointer;
  outline: inherit;
`;

const Links = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  width: 450px;
  height: 250px;
  margin: 15px auto;
  border: 2px solid black;
  transition: 0.5s ease-in-out;
  background-color: #f4f1eb;
  background-image: url("https://www.transparenttextures.com/patterns/paper-fibers.png");  
  &:hover {
    box-shadow: 2px 6px 2px 2px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    cursor: pointer;
  }
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
