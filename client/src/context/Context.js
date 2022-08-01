import { createContext, useState, useEffect } from "react"

import axios from "axios"

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [singleItem, setSingleItem] = useState([]);

  const [companies, setCompanies] = useState([]);
  const [companyInfo, setCompanyInfo] = useState([]);
  const [companyProducts, setCompanyProducts] = useState([]);

  const [cart, setCart] = useState(null);
  const [orderHistory, setOrderHistory] = useState(null);

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





  
  // console.log("items here", items);
  // console.log("companies here", companies);

  return <ItemContext.Provider value={{
    items, 
    companies,
    singleItem,
    setSingleItem,
    companyInfo,
    setCompanyInfo,
    companyProducts,
    setCompanyProducts,
    cart, 
    setCart
  }}>
    {children}
    </ItemContext.Provider>;
};
