import { useState, useEffect, useContext } from "react"; // importing from react
import styled from "styled-components"; // importing from styled-components
import axios from "axios"; // importing from axios

import { ItemContext } from "../context/Context"; // importing from ItemContext
import { ErrorPage } from "./ErrorPage";

// Confirmation page
const Confirmation = () => {
  const { error, setError } = useContext(ItemContext);

  const [confirmation, setConfirmation] = useState(null);
  useEffect(() => {
    axios("/api/orderHistory")
      .then((res) => {
        const newOrder = res.data.data[res.data.data.length - 1];
        setConfirmation(newOrder);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <>
      <Wrapper>
        <BackgroundImage></BackgroundImage>
        {confirmation ? (
          <ProductWrapper>
            <Message>
              <MessageText>
                Your order has been placed successfully!
              </MessageText>
              <MessageText>
                The order number is {confirmation.orderId}!
              </MessageText>
              <GiftImage src="https://media.giphy.com/media/3o7WICvWEiTBSP3U8o/giphy.gif" />
            </Message>
            <ProductContainer>
              {confirmation.data.map((el) => {
                return (
                  <ProductDetails>
                    <ItemHead>
                      <ItemImage src={el.imageSrc} />
                    </ItemHead>
                    <ItemBody>
                      <ItemDescription>
                        <ItemCaption>Product: </ItemCaption>
                        <ItemName>{el.name}</ItemName>
                      </ItemDescription>
                      <ItemDescription>
                        <ItemCaption>Body Location: </ItemCaption>
                        <ItemLocation>{el.body_location}</ItemLocation>
                      </ItemDescription>
                      <ItemDescription>
                        <ItemCaption>Category: </ItemCaption>
                        <ItemCategory>{el.category}</ItemCategory>
                      </ItemDescription>
                      <ItemPrice>{el.price}</ItemPrice>
                    </ItemBody>
                  </ProductDetails>
                );
              })}
            </ProductContainer>
          </ProductWrapper>
        ) : (
          <AlternateDiv>
            <ImageHere src="https://media.giphy.com/media/JF70qeolvPS0ph52ZY/giphy.gif" />
          </AlternateDiv>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 90vw;
  height: 100%;
  left: 10vw;
  top: 8vh;
  display: flex;
  justify-content: space-between;
`;

const ProductWrapper = styled.div`
  position: relative;
  width: 90vw;
  height: 100%;
  display: flex;
`;

const Message = styled.div`
  position: relative;
  width: 50vw;
  height: 100%;
  top: 30vh;
  border: 1px solid black;
  border-radius: 25px;
  background-color: black;
  color: white;
  margin: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  font-family: var(--quaternary-font-family);
`;

const MessageText = styled.h1`
  font-family: var(--quaternary-font-family);
`;

const GiftImage = styled.img``;

const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const BackgroundImage = styled.div`
  background-image: url("https://i.pinimg.com/736x/82/6a/95/826a95fde43be06c60b5c1f5349587c3.jpg");
  background-repeat: repeat;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: -5;
  width: 100%;
  height: 2000px;
  top: -5vh;
  /* left: 10vw; */
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  height: 50vh;
`;

const ItemHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 252px;
  width: 400px;
  background: #fa782e;
  /* Old browsers */
  background: white;
  /* FF3.6-15 */
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#fa782e', endColorstr='#c82930', GradientType=1);
  /* IE6-9 fallback on horizontal gradient */
  border-radius: 25px 25px 0 0;
  overflow: hidden;
  border: 4px solid black;
`;

const ItemImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  margin-top: 5px;
`;

const ItemBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: black;
  border-radius: 0 0 25px 25px;
  height: 252px;
  width: 400px;
  padding: 15px;
  overflow: hidden;
  color: white;
`;

const ItemDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const ItemCaption = styled.div`
  font-size: 1.2rem;
  display: inline-block;
  text-align: right;
`;

const ItemName = styled.h3`
  padding: 10px;
  display: inline-block;
  text-align: left;
  margin-left: 50px;
`;
const ItemCategory = styled.h3`
  padding: 5px;
  display: inline-block;
  text-align: left;
  margin-left: 45px;
`;
const ItemLocation = styled.h3`
  padding: 5px;
  display: inline-block;
  text-align: left;
`;
const ItemPrice = styled.h4`
  padding: 0 5px;
  display: inline-block;

  width: 100px;
  height: 38px;

  background-color: #6ab070;
  -webkit-border-radius: 3px 4px 4px 3px;
  -moz-border-radius: 3px 4px 4px 3px;
  border-radius: 3px 4px 4px 3px;

  border-left: 1px solid #6ab070;

  /* This makes room for the triangle */
  margin-left: 19px;

  position: relative;

  color: white;
  font-weight: 300;
  font-size: 22px;
  line-height: 38px;

  padding: 0 10px 0 10px;

  &:before {
    content: "";
    position: absolute;
    display: block;
    left: -19px;
    width: 0;
    height: 0;
    border-top: 19px solid transparent;
    border-bottom: 19px solid transparent;
    border-right: 19px solid #6ab070;
  }

  &:after {
    content: "";
    background-color: white;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    display: block;
    position: absolute;
    left: -9px;
    top: 17px;
  }
`;

const AlternateDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
`;

const ImageHere = styled.img`
  width: 50vw;
  height: auto;
`;

export default Confirmation;
