import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
import { useEffect,useContext } from "react";
import { ItemContext } from "../context/Context";
import axios from "axios";
 
export const CompanyPage = () => {
 
   const { companyId } = useParams();
   const {companyProduct,setCompanyProduct} = useContext(ItemContext)
   useEffect(() => {
       axios
           .get(`/api/companies/products/${companyId}`)
           .then((res) => {
               console.log(res);
           }
           )
           .catch((err) => {
               console.log(err);
           }
           );
   }
   , []);
 
 return (
   <div>
   </div>
 );
};


const Wrapper = styled.div``

const GridContainer = styled.div``
const GridItem = styled(NavLink)``

const ItemHead = styled.div``
const ItemImage = styled.img``

const ItemBody = styled.div``
const ItemName = styled.div``
const ItemLocation = styled.div``
const ItemCategory = styled.div``
const ItemPrice = styled.div``

const ButtonSideDiv = styled.div``
const AddtoCartButton = styled.button``
