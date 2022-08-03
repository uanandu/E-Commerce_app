import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import ShopPage from "./ShopPage";
import WelcomePage from "./WelcomePage";
import GlobalStyles from "../styles/GlobalStyles";
import NavBar from "./NavBar";
import AllCompanies from "./AllCompanies";
import AllCategories from "./AllCategories";
import {CompanyPage} from "./CompanyPage"; 
import ItemPage from "./ItemPage";
import Checkout from "./Checkout";
import SideBar from "./SideBar";
import OrderHistory from "./OrderHistory";
import Confirmation from "./Confirmation";
import { ErrorPage } from "./ErrorPage";

const App = () => {
 return (
   <BrowserRouter>
   <GlobalStyles/>
   <NavBar/>
   <SideBar/>
     <Switch>
       <Route exact path="/">
         <WelcomePage />
       </Route>
       <Route exact path="/shop">
         <ShopPage />
       </Route>
       <Route exact path="/shop/items/:itemId">
         <ItemPage />
       </Route>
       <Route exact path ="/companies">
         <AllCompanies/>
       </Route>
       <Route exact path="/companies/:companyId">
         <CompanyPage/>
       </Route>
       <Route exact path="/all-categories">
         <AllCategories/>
       </Route>
       <Route exact path="/shop/categories/:categoryId">
         catagory
       </Route>
       <Route exact path="/checkout">
         <Checkout/>
       </Route>
       <Route exact path="/confirmation">
          <Confirmation/>
        </Route>
        <Route exact path="/previous-purchases">
          <OrderHistory/>
       </Route>
       <Route exact path="/about">
         <AboutUs />
       </Route>
       <Route exact path="*">
          <ErrorPage />
        </Route>
     </Switch>
   </BrowserRouter>
 );
};
 
export default App;