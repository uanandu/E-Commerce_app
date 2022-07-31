import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [categories, setCategories] = useState(null);
  const [companies, setCompanies] = useState(null);
  const [cart, setCart] = useState(null);
  const [orderHistory, setOrderHistory] = useState(null);

  useEffect(() => {
    axios
      .get("/api/companies")
      .then((res) => {
        // console.log(res);
        setCompanies(res.data);
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
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("items here", items);
  console.log("companies here", companies);

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
