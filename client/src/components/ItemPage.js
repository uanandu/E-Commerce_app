// this page will show the indivdual items information after being clicked on/
import styled from "styled-components"; // styled-components
import { useEffect, useContext } from "react"; // useEffect, useContext
import { useParams } from "react-router-dom"; // useParams
import axios from "axios";

import { ErrorPage } from "./ErrorPage";

// Importing all useContexts
import { ItemContext } from "../context/Context";

// Individual item page
const ItemPage = () => {
  // getting all items from context
  const {
    singleItem,
    setSingleItem,
    company,
    setCompany,
    addToCart,
    error,
    setError,
  } = useContext(ItemContext);

  // getting the item id from the url
  const { itemId } = useParams();

  // getting the item from the database based on the ItemId clicked on
  useEffect(() => {
    axios
      .get(`/api/shop/items/${itemId}`)
      .then((res) => {
        setSingleItem(res.data.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [itemId]);

  // getting the company from the database based on the ItemId clicked on
  useEffect(() => {
    axios
      .get(`/api/companies/${singleItem.companyId}`)
      .then((res) => {
        console.log("inside single item", res.data.companyInfo);
        setCompany(res.data.companyInfo);
      })
      .catch((err) => {
        setError(err);
      });
  }, [singleItem.companyId]);

  return (
    //1st step fetch the data of the item based on the :param (item id)
    //2nd step is to render it.

    <>
      {!error ? (
        <Wrapper>
      <BackgroundImage>
        {singleItem && company ? (
          <MainWrapper>
            <LeftDiv onClick={(e) => addToCart(e, singleItem)}>
              <InstructionImage src="https://media.giphy.com/media/PbnHWUeWBb2QNqFAoA/giphy.gif" />
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
            </RightDiv>
          </MainWrapper>
        ) : (
          <AlternateDiv>
            <ImageHere src="https://media.giphy.com/media/JF70qeolvPS0ph52ZY/giphy.gif" />
          </AlternateDiv>
        )}
      </BackgroundImage>
    </Wrapper>
      ): (
        <ErrorPage />
      )}
    </>
    
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  left: 10vw;
  height: 30vh;
`;

const BackgroundImage = styled.div`
  background-image: url("https://i.pinimg.com/736x/82/6a/95/826a95fde43be06c60b5c1f5349587c3.jpg");
  background-repeat: repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1200px;
  width: 2000px;
`;

const MainWrapper = styled.div`
  height: 30vh;
  display: flex;
  position: absolute;
  top: 35vh;
  left: 30vh;
`;

const InstructionImage = styled.img`
  position: relative;
  width: 10vw;
  left: -7vw;
  top: -10vh;
  height: auto;
  padding: 20px;
  z-index: 5;
`;

const LeftDiv = styled.button`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px 0 10px 10px;
  border-left: 4px solid black;
  border-top: 4px solid black;
  border-bottom: 4px solid black;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

const ItemImage = styled.img`
  width: 200px;
  position: absolute;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: black;
  color: white;
  width: 30vw;
  padding: 20px;
  border-radius: 10px 10px 10px 0;
`;

const ItemName = styled.h2`
  font-family: var(--primary-font-family);
  font-weight: 300;
  font-size: 30px;
`;

const CompanyUrl = styled.a`
  text-decoration: none;
  color: white;
`;

const ItemPrice = styled.h4`
  font-size: 30px;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 5px;
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
`;

const ImageHere = styled.img`
  position: relative;
  margin-top: 40vh;
  width: 50vw;
  height: auto;
`

export default ItemPage;
