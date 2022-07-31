import { useContext } from "react";

import { ItemContext } from "../context/Context";

import styled from "styled-components";
import SideBar from "./SideBar";

const ShopPage = () => {
  const { items, categories, companies } = useContext(ItemContext);

  console.log("items here", items);

  return (
    <Wrapper>
      <SideBar />
      <GridContainer>
        {items.map((item) => {
          return (
            <>
              <GridItem>
                <ItemHead>
                  <ItemImage src={item.imageSrc} />
                </ItemHead>
                <ItemBody>
                <ItemName>{item.name}</ItemName>
                <ItemLocation>{item.body_location}</ItemLocation>
                <ItemCategory>{item.category}</ItemCategory>
                <ItemPrice>${item.price}</ItemPrice>
                </ItemBody>
                <ButtonSideDiv>
                  <AddToCartButton>Add to Cart</AddToCartButton>
                </ButtonSideDiv>
              </GridItem>
            </>
          );
        })}
      </GridContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const GridContainer = styled.div`
  width: 90vw;
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  background-color: whitesmoke;
`;
const GridItem = styled.div`
  width: 300px;
  height: 500px;
  margin: 15px auto;
  border-radius: 25px;
  box-shadow: 2px 4px 2px 2px rgba(0, 0, 0, 0.1);
  transition: 0.5s ease-in-out;

  &:hover {
    box-shadow: 2px 6px 2px 2px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const ItemHead = styled.div`
  position: relative;
  height: 252px;
  background: #fa782e;
  /* Old browsers */
  background: white;
  /* FF3.6-15 */
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#fa782e', endColorstr='#c82930', GradientType=1);
  /* IE6-9 fallback on horizontal gradient */
  border-radius: 25px 25px 0 0;
`;

const ItemImage = styled.img`
  position: absolute;
  left: 0;
  margin-top: 5px;
  margin-left: 50px;
`;

const ItemBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px;
`

const ItemName = styled.h3``;
const ItemCategory = styled.h4``;
const ItemLocation = styled.h5``;
const ItemPrice = styled.h4``;

const ButtonSideDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`

const AddToCartButton = styled.button``


export default ShopPage;
