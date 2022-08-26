import { createContext, useState, useEffect } from "react"; // import from react
import axios from "axios"; // import from axios

export const ItemContext = createContext(); // creating a context

// creating a provider
export const ItemProvider = ({ children }) => {

  // states here:
  const [Items, setItems] = useState([]); // state to capture the all items
  const [singleItem, setSingleItem] = useState([]); // state to capture the single item

  const [companies, setCompanies] = useState([]); // state to capture the all companies
  const [companyInfo, setCompanyInfo] = useState([]); // state to capture the single company
  const [companyProducts, setCompanyProducts] = useState([]); // state to capture the all products of the company

  const [ItemNumber, setItemNumber] = useState(0); // state to capture the number of items in the cart
  const [cart, setCart] = useState([]); // state to capture the items in the cart
  const [orderHistory, setOrderHistory] = useState(null); // state to capture the orders of the user

  const [company, setCompany] = useState(null); // state to capture the company of the item

  const [error, setError] = useState(false); // state to capture the error

  // getting the all companies from the database
  useEffect(() => {
    axios
      .get("/api/companies")
      .then((res) => {
        setCompanies(res.data.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  // getting the all items from the database
  useEffect(() => {
    axios
      .get("/api/items")
      .then((res) => {
        setItems(res.data.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  console.log("all items in the provider: ", Items);

  let temporaryArray = []; // temporary array to store the items in the cart

  // for the post method to add the item to the cart in mongodb
  const addToCart = (e, items) => {

    e.preventDefault();
    e.stopPropagation();

    temporaryArray.push(items);
    setCart(temporaryArray);

    // sending the item to the database
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
          return;
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
