import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect, useContext } from "react";
 
import { ItemContext } from "../context/Context";
 
import background from "../styles/images/companiesBackground.jpeg";
 
const AllCompanies = () => {
 const { companies } = useContext(ItemContext);
 
 return (
   <Wrapper>
       <GridContainer>
     {companies.map((company) => {
       return (
         <Links to={`/companies/${company._id}`}>
           <CompanyDiv>
               <CompanyName>{company.name}</CompanyName>
             <CompanyCountry>{company.country}</CompanyCountry>
             <CompanyUrl>{company.url}</CompanyUrl>
           </CompanyDiv>
         </Links>
       );
     })}
       </GridContainer>
   </Wrapper>
 );
};



const Wrapper = styled.div`
  position: fixed;
  width: 70vw;
  left: 15vw;
  top: 8vh;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Links = styled(NavLink)`
  text-decoration: none;
  color: black;
  width: 300px;
  height: 100px;
  margin: 15px auto;
  border: 1px solid black;
  /* box-shadow: 2px 4px 2px 2px rgba(0, 0, 0, 0.1); */
  transition: 0.5s ease-in-out;
  background-color: whitesmoke;

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
`

const CompanyDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 100px;
    padding: 10px;
`

const CompanyName = styled.h2``
const CompanyCountry = styled.h3``
const CompanyUrl = styled.p``


export default AllCompanies;
