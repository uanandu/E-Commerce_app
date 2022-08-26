//Importing everything from package.json
import styled from "styled-components";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useContext } from "react";

//Importing all useContexts
import { ItemContext } from "../context/Context";

//importing icons
import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";

export const CompanyPage = () => {
  const { companyId } = useParams();
  const {
    companyProduct,
    setCompanyProduct,
    companyInfo,
    setCompanyInfo,
    companyProducts,
    setCompanyProducts,
  } = useContext(ItemContext);

  useEffect(() => {
    axios
      .get(`/api/companies/${companyId}`)
      .then((res) => {
        console.log(res);
        setCompanyInfo(res.data.companyInfo);
        setCompanyProducts(res.data.companyProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <GridContainer>
        {companyProducts.map((product) => {
          return (
            <>
              <GridItem to={`/shop/items/${product._id}`}>
                <ItemHead>
                  <ItemImage src={product.imageSrc} />
                </ItemHead>
                <ItemBody>
                  <ItemName>{product.name}</ItemName>
                  <ItemLocation>{product.body_location}</ItemLocation>
                  <ItemCategory>{product.category}</ItemCategory>
                </ItemBody>
                <ButtonSideDiv>
                  <ItemPrice>{product.price}</ItemPrice>
                  <AddToCartButton>
                    +
                    <Icon size={25} icon={shoppingCart} />
                  </AddToCartButton>
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
const GridItem = styled(NavLink)`
  color: black;
  text-decoration: none;
  width: 320px;
  height: 500px;
  margin: 15px auto;
  border-radius: 25px;
  transition: 0.5s ease-in-out;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 2px 6px 2px 2px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const ItemHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 252px;
  background: #fa782e;
  /* Old browsers */
  background: white;
  /* FF3.6-15 */
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#fa782e', endColorstr='#c82930', GradientType=1);
  /* IE6-9 fallback on horizontal gradient */
  border-radius: 25px 25px 0 0;
  overflow: hidden;
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
  justify-content: space-around;
  width: 100%;
  height: auto;
  padding: 15px;
`;

const ItemName = styled.h3`
  padding: 10px;
`;
const ItemCategory = styled.h4`
  padding: 5px;
`;
const ItemLocation = styled.h5`
  padding: 5px;
`;
const ItemPrice = styled.h4`
  padding: 5px;
`;

const ButtonSideDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -20px;
  /* align-items: flex-start; */
  width: 100%;
  /* height: 50px; */
  /* padding-left: 50px; */

  align-items: center;
`;

const AddToCartButton = styled.button`
  /* margin: 10px; */
  padding: 5px;
  border-radius: 25px;
  margin-left: 25%;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    box-shadow: 2px 6px 2px 2px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
    cursor: copy;
  }
`;
