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
  const [buttonPhrase, setButtonPhrase] = useState("Add to Cart");

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
        console.log(err);
      });
  }, []);

  const addItemNumber = (e) => {
    e.preventDefault();
    setItemNumber(ItemNumber + 1);
  };

  const addToCart = (e, items) => {
    e.preventDefault();
    addItemNumber(e);

    // console.log("inside cart",cart);
    setCart([...cart, items]);
    setButtonPhrase("Added to Cart");

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
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const removeFromCart = (e, item) => {
  //   e.preventDefault();
  //   setCart(cart.filter((cartItem) => cartItem._id !== item._id));
  //   axios({
  //     method: "delete",
  //     url: `/api/cart/${item._id}`,
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  //   .then((res) => {
  //     console.log(res);
  // })
  // }

  // console.log("items here", items);
  // console.log("companies here", companies);

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
        addItemNumber,
        addToCart,
        cart,
        setCart,
        company,
        setCompany,
        buttonPhrase,
        setButtonPhrase,
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
