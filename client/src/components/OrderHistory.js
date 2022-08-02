import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const OrderHistory = () => {
    const [history,setHistory]=useState([])
    useEffect(()=>{
        axios.get('/api/orderHistory')
        .then((res)=>{
            // console.log("orders information",res.data.data)
            setHistory(res.data.data)
        }).catch((err)=>console.log(err))
    },[])

    // if(!history){
    //     <div>Loading</div>
    // }
  return (
    <>
    <ContentWrapper>
        <h1>Description</h1>
        <h1>Price</h1>

        {history.map((el)=>{
            return(
                <Wrapper>
                <Image src={el.imageSrc}/>
                <Name>
                <p>{el.name}</p>                
                </Name>
                <PriceColumn>
                <p>{el.price}</p>
                </PriceColumn>
                </Wrapper>
            )
        })}
    </ContentWrapper>
    </>
  )
}
const ContentWrapper = styled.div`
  position: fixed;
  width: 70vw;
  left: 15vw;
  top: 8vh;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
`
const Wrapper = styled.div`
    display: flex;
    border:1px solid darkgray;

`
const Image = styled.img`
    display: flex;
    flex-direction:column;
    justify-content: flex-start;

`
const Name = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: flex-start;

`
const PriceColumn = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
`
export default OrderHistory