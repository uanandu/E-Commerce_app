import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { ItemContext } from "../context/Context";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const Checkout = () => {
  const { cart, setCart, Items} = useContext(ItemContext);
  const myCart = cart.data;
  let subtotal = 0;
  let total = 0;
  const history = useHistory();
  let quantityArray = [];

  //fetches cart from Mongo, and makes it accessible via "cart"
  useEffect(() => {
    axios
      .get("/api/cart")
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //deletes an item from the cart based on its' _id.
  const deleteItem = (ev) => {
    const _id = ev.target.id;
    axios
      .delete(`/api/cart/${_id}`)
      .then((res) => {
        console.log(res.data);
        document.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //onSubmit, this function first posts everything into orderHistory, and then deletes them
  //all from cart. Then pushes to orderHistory page.
const handleSubmit = (ev) => {
  //posts the order with an id to the orderHistory 
        axios({
        method: "POST",
        url: "/api/orderHistory",
        data: {
          data: myCart,
          orderId : uuidv4(),
        },
      });

      //sends the quantityArray to the server. Server will iterate over each object in the a array,
      //and modify the numInStock of each item depending on the quantity purchased.
        axios({
        method: 'patch',
        url: '/api/shop/items',
        data: {
          body: quantityArray,
        }
      })

      //removes each item from the cart, so that when the purchase is made, you can have a fresh cart.
      myCart.map((item) => {
        const _id = item._id;
      //empties the cart after the order is made
      axios
        .delete(`/api/cart/${_id}`)
        .then((res) => {
          console.log(res.data);
          history.push("/previous-purchases");
        })
        .catch((err) => {
          console.log(err);
        });

      })

    };


  if (!cart || !myCart) {
    return <div>Loading</div>;
  } else {
    const priceArray = [];

    //pushes each item id in the cart with its' corresponding quantity to the quantityArray,
    //which will be updated in the cart and used in post to update item stock
    myCart.map((item) => {
      quantityArray.push({ _id : item._id, quantity: 1})
    });

    return (
      <Wrapper>
        <LeftDiv>
          <HeaderDiv>
            <ShoppingCart>Shopping Cart</ShoppingCart>
            <CartQuantity>{myCart.length} Item(s)</CartQuantity>
          </HeaderDiv>
          <CategoryDiv>
            <Description>Description</Description>
            <Quantity>Quantity</Quantity>
            <Price>Price</Price>
          </CategoryDiv>
          {myCart.map((item) => {
            //maps over all Items, finding the _id of the specific cart item, changes stock to 
            //the quantity that are actually in stock of that item.
            let stock = 0;
            Items.map((item2)=>{
              if (item2._id === item._id){
                stock = item2.numInStock;
              } 
            })


            //removes $ from each of the prices, turns them into a Number, and pushes to an array.
            const itemPriceNoSymbol = item.price.replace(/\$/g, "");
            const itemPrice = parseInt(itemPriceNoSymbol);
            priceArray.push(itemPrice);
            //checks that we're getting the correct total, then adds all of prices together, creating a subtotal
            if (priceArray.length === myCart.length) {
              const reducer = (accumulator, curr) => accumulator + curr;
              subtotal = priceArray.reduce(reducer).toFixed(2);
              //adds tax
              total = (subtotal * 1.15).toFixed(2);
            }


            //onChange of quantity of item in the cart, updates the quantity in the quantityArray,
            //this will be used in the patch to determine how much of each item will be removed from stock.
            const quantityHandler = (e) => {
              quantityArray.map((object) => {
                if (object._id === item._id) {
                  object.quantity = parseInt(e.target.value);
                }
              })
            }
            
            return (
              <ItemDiv>
                <DescriptionDiv>
                  <Img src={item.imageSrc} alt={item.name} />
                  <SubDescripion>
                    <ItemName>{item.name}</ItemName>
                    <Remove onClick={deleteItem} id={item._id}>
                      Remove
                    </Remove>
                  </SubDescripion>
                </DescriptionDiv>
                <QuantityDiv>
                  <Form onChange = {quantityHandler}>
                  <Input type="number" id="quantity" name="quantity" min="1" max={stock}/>
                  <Label for="quantity">Max {stock === 0? 1:stock}</Label>
                  </Form>
                </QuantityDiv>
                <PriceDiv>
                  <ItemPrice>{item.price}</ItemPrice>
                </PriceDiv>
              </ItemDiv>
            );
          })}
        </LeftDiv>
        <RightDiv>
          <Form onSubmit={handleSubmit}>
            <Div>Order Summary</Div>
            <Subtotal>
              <Bold>Subtotal</Bold> ${subtotal}
            </Subtotal>
            <Total>
              <Bold>Total</Bold> ${total}
            </Total>
            <Div>Personal Information</Div>
            <TextArea placeholder="Name" required></TextArea>
            <TextArea placeholder="Surname" required></TextArea>
            <TextArea placeholder="Email" required></TextArea>
            <CheckoutButton>Checkout</CheckoutButton>
          </Form>
        </RightDiv>
      </Wrapper>
    );
  }
};
const Label = styled.label`
font-family: var(--primary-font-family);
color: grey;
`
const Input = styled.input`
margin-bottom: 3px;
`
const Bold = styled.span`
  font-weight: bold;
  margin-right: 15px;
`;
const CheckoutButton = styled.button`
  width: 90%;
  border-radius: 15px;
  font-family: var(--secondary-font-family);
  font-size: 25px;
  border: none;
  margin-top: 10px;
  background-color: #ff9966;
  color: white;
  cursor: pointer;
`;
const Subtotal = styled.div`
  font-family: var(--secondary-font-family);
  font-size: 20px;
`;
const Total = styled.div`
  font-family: var(--secondary-font-family);
  font-size: 20px;
  margin-bottom: 15px;
`;
const Div = styled.div`
  font-family: var(--primary-font-family);
  font-size: 30px;
`;
const TextArea = styled.textarea`
  width: 90%;
  resize: none;
  font-family: var(--secondary-font-family);
  font-size: 17px;
  margin-bottom: 10px;
`;
const Form = styled.form`
display: flex;
flex-direction: column;
`;
const SubDescripion = styled.div`
  display: flex;
  flex-direction: column;
`;
const Remove = styled.button`
  background: none;
  border: none;
  color: grey;
  font-family: var(--primary-font-family);
  font-size: 17px;
  width: 30px;
  padding: 0;
  cursor: pointer;
`;
const CategoryDiv = styled.div`
  width: 100%;
  border-bottom: 1px black solid;
  color: grey;
  font-size: 15px;
  display: flex;
`;
const Description = styled.div`
  width: 60%;
  font-family: var(--primary-font-family);
  margin-top: 3px;
  padding-left: 5px;
`;
const DescriptionDiv = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  padding-right: 10px;
  align-items: center;
`;
const Quantity = styled.div`
  width: 20%;
  font-family: var(--primary-font-family);
  margin-top: 3px;
`;
const CartQuantity = styled.div`
  font-family: var(--primary-font-family);
  font-size: 40px;
`;
const QuantityDiv = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  padding-left: 15px;
`;
const Price = styled.div`
  width: 20%;
  font-family: var(--primary-font-family);
  margin-top: 3px;
`;
const PriceDiv = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const ItemPrice = styled.div`
  font-family: var(--secondary-font-family);
  font-weight: bold;
  font-size: 17px;
`;
const ShoppingCart = styled.div`
  font-family: var(--primary-font-family);
  font-size: 50px;
`;
const HeaderDiv = styled.div`
  width: 100%;
  border-bottom: 1px black solid;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const ItemName = styled.div`
  font-family: var(--primary-font-family);
  font-size: 20px;
`;
const Img = styled.img`
  width: 80px;
  padding-right: 10px;
`;
const ItemDiv = styled.div`
  padding: 15px;
  border-bottom: 1px black solid;
  display: flex;
`;
const LeftDiv = styled.div`
  width: 60vw;
`;
const RightDiv = styled.div`
  background-color: #fff3e1;
  width: 30vw;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-top: 50px;
`;
const Wrapper = styled.div`
  width: 90vw;
  color: black;
  position: relative;
  top: 8vh;
  left: 10vw;
  display: flex;
`;

export default Checkout;
