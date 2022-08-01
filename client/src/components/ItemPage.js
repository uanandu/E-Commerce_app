// this page will show the indivdual items information after being clicked on/
import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Redirect, useParams } from "react-router-dom";

import { ItemContext } from "../context/Context";

const ItemPage = () => {

  const {singleItem, setSingleItem} = useContext(ItemContext);
  const [company, setCompany] = useState(null);
  const [buttonPhrase, setButtonPhrase] = useState("Add to Cart")
  const {itemId} = useParams();

  useEffect(()=> {
    axios.get(`/api/shop/items/${itemId}`)
    .then(res => {
      console.log("inside single item",res);
      setSingleItem(res.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  useEffect(()=> {
    axios.get(`/api/companies/${singleItem.companyId}`)
    .then(res => {
      setCompany(res.data.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, []);
  
  const addToCart = (ev) => {
    ev.preventDefault();

    axios({
      method: 'post',
      url: '/api/cart',
      data: {
      _id: itemId,
      name: singleItem.name,
      price: singleItem.price,
      body_location: singleItem.body_location,
      category: singleItem.category,
      imageSrc: singleItem.imageSrc,
    }
    })
    .catch(err => {
      console.log(err);
    })  

    setButtonPhrase("Added to cart!")
  }


  if (!singleItem || !company) {
    return(<div>Loading</div>)
  }

  return (
    //1st step fetch the data of the item based on the :param (item id)
    //2nd step is to render it. sjdklasjklddas
<Wrapper>
    <MainWrapper>
      <LeftDiv>
        <ItemImage src={singleItem.imageSrc}/>
      </LeftDiv>
      <RightDiv>
        <ItemName>{singleItem.name}</ItemName>
        <A href = {company.url} target="_blank">
        <ItemCompanyName>{company.name}, {company.country}</ItemCompanyName>
        </A>
        <ItemCategory>{singleItem.category}/{singleItem.body_location}</ItemCategory>
        <ItemPrice>{singleItem.price}</ItemPrice>
        <AddToCart onClick={addToCart}>{buttonPhrase}</AddToCart>
      </RightDiv>
    </MainWrapper> 
    </Wrapper>
  );
};

const A = styled.a`
text-decoration: none;
color: black;
`
const AddToCart = styled.button`
border: none;
width: 300px;
height: 40px;
background: #ffab44;
color: white;
font-size: 25px;
border-radius: 5px;
cursor: pointer;
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-content: center;
font-family: var(--secondary-font-family);
`
const MainWrapper = styled.div`
  height: 500px;
  display: flex;
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.3);
`
const LeftDiv = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ItemImage = styled.img`
  width: 320px;
`
const ItemPrice = styled.h4`
font-size: 30px;
font-weight: 400;
font-style: italic;
margin-bottom: 5px;
`

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff3e1;
  width: 650px;
  padding-left: 20px;
`

const ItemName = styled.h2`
font-family: var(--primary-font-family);
font-weight: 300;
font-size: 30px;
`
const ItemCategory = styled.p`
margin-bottom: 50px;
`
const ItemCompanyName = styled.p`
font-size: 20px;

&:hover{
  color: #ffab44;
  cursor: pointer;
}
`


export default ItemPage;
