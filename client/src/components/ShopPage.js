import React from "react";
import styled from "styled-components";

const ShopPage = () => {
  return (
    <>
      <GridContainer>
        <GridItem>items</GridItem>
      </GridContainer>
    </>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 10px;
`;
const GridItem = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
`;

export default ShopPage;
