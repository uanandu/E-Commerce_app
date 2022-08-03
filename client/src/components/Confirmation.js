import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const Confirmation = () => {
  const [confirmation,setConfirmation] = useState(null)
  useEffect(()=>{
    axios('/api/orderHistory')
    .then((res)=>{
      const newOrder = res.data.data[res.data.data.length-1]
      console.log(newOrder)
      setConfirmation(newOrder)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  
  return (
    <Wrapper>
    {confirmation?(
      <div>
        <h1>Your order has been placed successfully!</h1>
        <h1>The order number is {confirmation.orderId}!</h1>
        {confirmation.data.map((el)=>{
          return (
            <>
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
            </>
          )
        })}
      </div>
    ):(
      <div>
        loading
      </div>
    )}
    </Wrapper>
  )
}


const Wrapper = styled.div`
  position: relative;
  width: 90vw;
  height: 100%;
  left: 10vw;
  top: 8vh;
  display: flex;
  justify-content: space-between;
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
  width: 100%;
  height: 50%;
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

  width: auto;
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


export default Confirmation;