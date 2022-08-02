// this page will show the indivdual items information after being clicked on/
import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Redirect, useParams } from "react-router-dom";

import { ItemContext } from "../context/Context";

const ItemPage = () => {
  const { singleItem, setSingleItem, company, setCompany, buttonPhrase, addToCart } = useContext(ItemContext);

  const { itemId } = useParams();

  useEffect(() => {
    axios
      .get(`/api/shop/items/${itemId}`)
      .then((res) => {
        // console.log("inside single item",res);
        setSingleItem(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [itemId]);

  useEffect(() => {
    axios
      .get(`/api/companies/${singleItem.companyId}`)
      .then((res) => {
        console.log("inside single item", res.data.companyInfo);
        setCompany(res.data.companyInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [singleItem.companyId]);

  return (
    //1st step fetch the data of the item based on the :param (item id)
    //2nd step is to render it.
    <Wrapper>
      {singleItem && company ? (
        <MainWrapper>
          <LeftDiv>
            <ItemImage src={singleItem.imageSrc} />
          </LeftDiv>
          <RightDiv>
            <ItemName>{singleItem.name}</ItemName>
            <CompanyUrl href={company.url} target="_blank">
              <ItemCompanyName>
                {company.name}, {company.country}
              </ItemCompanyName>
            </CompanyUrl>
            <ItemCategory>
              {singleItem.category}/{singleItem.body_location}
            </ItemCategory>
            <ItemPrice>{singleItem.price}</ItemPrice>
            <AddToCart onClick={addToCart}>{buttonPhrase}</AddToCart>
          </RightDiv>
        </MainWrapper>
      ) : (
        <AlternateDiv>Loading.....</AlternateDiv>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 65vw;
  left: 20vw;
  height: 30vh;
  top: 20vh;
`


const CompanyUrl = styled.a`
  text-decoration: none;
  color: black;
`;
const AddToCart = styled.button`
  border: none;
  width: 300px;
  height: 40px;
  background: #ffab44;
  color: white;
  font-size: 25px;
  border-radius: 5px;
  cursor: pointer;
`;

const MainWrapper = styled.div`
  height: 50vh;
  display: flex;
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.3);
`;
const LeftDiv = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 320px;
`;
const ItemPrice = styled.h4`
  font-size: 30px;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 5px;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff3e1;
  width: 650px;
  padding-left: 20px;
`;

const ItemName = styled.h2`
  font-family: var(--primary-font-family);
  font-weight: 300;
  font-size: 30px;
`;
const ItemCategory = styled.p`
  margin-bottom: 50px;
`;
const ItemCompanyName = styled.p`
  font-size: 20px;

  &:hover {
    color: #ffab44;
    cursor: pointer;
  }
`;

const AlternateDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
`

export default ItemPage;
