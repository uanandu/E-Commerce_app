import styled from "styled-components"; // styled components
import { useEffect, useState, useContext } from "react"; // useEffect, useState
import axios from "axios"; // axios

import { ItemContext } from "../context/Context";
import { ErrorPage } from "./ErrorPage";

// show previous orders of the user
const OrderHistory = () => {
  const { error, setError } = useContext(ItemContext);

  // state to capture the orders of the user
  const [history, setHistory] = useState([]);

  // getting the user id from the mongodb
  useEffect(() => {
    axios
      .get("/api/orderHistory")
      .then((res) => {
        // console.log("orders information",res.data.data)
        setHistory(res.data.data);
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <ContentWrapper>
        <BackgroundImage>
          <GridContainer>
            {history.map((el) => {
              return (
                <GridItem>
                  <LeftDiv>
                    <Image src={el.imageSrc} />
                  </LeftDiv>
                  <RightDiv>
                    <Name>
                      <p>{el.name}</p>
                    </Name>
                    <PriceSection>
                      <PriceColumn>
                        <p>{el.price}</p>
                      </PriceColumn>
                      <PurchasedSeal src="https://media.giphy.com/media/oS9gvPTg8i9VYfIohK/giphy.gif" />
                    </PriceSection>
                  </RightDiv>
                </GridItem>
              );
            })}
          </GridContainer>
        </BackgroundImage>
      </ContentWrapper>
    </>
  );
};
const ContentWrapper = styled.div`
  position: relative;
  width: 70vw;
  left: 10vw;
  top: 6vh;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const BackgroundImage = styled.div`
  background-image: url("https://i.pinimg.com/736x/82/6a/95/826a95fde43be06c60b5c1f5349587c3.jpg");
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 2000px;
`;

const GridContainer = styled.div`
  width: 90vw;
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
  background-color: transparent;
  height: 100%;
`;

const GridItem = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  text-decoration: none;
  background-color: white;
  width: 400px;
  height: auto;
  margin: 15px auto;
  padding: 15px;
  border: 1px solid black;
  border-radius: 25px;
  transition: 0.5s ease-in-out;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  animation: scaleIn 1s ease-in-out;

  @keyframes scaleIn {
    from {
      transform: translateY(200%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;

const LeftDiv = styled.div`
  border-right: 1px solid black;
  padding: 10px;
`;
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

const Image = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100px;
  height: auto;
  object-fit: contain;
`;
const Name = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const PriceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PriceColumn = styled.div`
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

const PurchasedSeal = styled.img`
  width: 60px;
  height: auto;
`;

export default OrderHistory;
