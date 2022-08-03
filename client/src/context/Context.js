import { createContext, useState, useEffect } from "react";

import axios from "axios";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [Items, setItems] = useState([]);
  const [singleItem, setSingleItem] = useState([]);

  const [companies, setCompanies] = useState([]);
  const [companyInfo, setCompanyInfo] = useState([]);
  const [companyProducts, setCompanyProducts] = useState([]);

  const [ItemNumber, setItemNumber] = useState(0);
  const [cart, setCart] = useState([]);
  const [orderHistory, setOrderHistory] = useState(null);

  const [company, setCompany] = useState(null);

  const [error, setError] = useState(false);


  useEffect(() => {
    axios
      .get("/api/companies")
      .then((res) => {
        // console.log(res);
        setCompanies(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/api/items")
      .then((res) => {
        // console.log(res);
        setItems(res.data.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  
  // useEffect(() => {
  //   axios
  //     .get("/api/cart")
  //     .then((res) => {
  //       console.log("inside context- cart",res)
  //       setCart(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [Items]);

  let temporaryArray = [];


  const addToCart = (e, items) => {
    e.preventDefault();
    e.stopPropagation();
    temporaryArray.push(items);
    setCart(temporaryArray);

      axios({
        method: "POST",
        url: "/api/cart",
        data: {
          _id: items._id,
          name: items.name,
          price: items.price,
          imageSrc: items.imageSrc,
          body_location: items.body_location,
          category: items.category,
          companyId: items.companyId,
        },
      })
        .then((res) => {
          console.log("this is inside post",res);
        })
        .catch((err) => {
          setError(err);   
        });
  };


  return (
    <ItemContext.Provider
      value={{
        Items,
        companies,
        singleItem,
        setSingleItem,
        companyInfo,
        setCompanyInfo,
        companyProducts,
        setCompanyProducts,
        ItemNumber,
        addToCart,
        cart,
        setCart,
        company,
        setCompany,
        orderHistory,
        setOrderHistory,
        error,
        setError,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
