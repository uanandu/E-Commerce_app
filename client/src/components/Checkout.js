import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { ItemContext } from '../context/Context'

const Checkout = () => {
    const {cart,setCart} = useContext(ItemContext);

    useEffect(()=>{
        axios.get('/api/cart')
        .then((res)=>{
            console.log(res)
            //res.data will display all item info in cart collection
            //we can decide what to display according to frontend design
            setCart(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div>Checkout</div>
  )
}

export default Checkout