
import { BrowserRouter, Switch, Route } from "react-router-dom"; // for routes

import GlobalStyles from "../Styles/GlobalStyles"; // for global styles

import NavBar from "./NavBar"; // for navbar
import SideBar from "./SideBar"; // for side bar

import WelcomePage from "./WelcomePage"; // for welcome page
import ShopPage from "./ShopPage"; // for shop page
import ItemPage from "./ItemPage"; // for item page (individual items)
import AllCompanies from "./AllCompanies"; // for all companies
import {CompanyPage} from "./CompanyPage";  // for company page (individual company products)
import Checkout from "./Checkout"; // for checkout page
import Confirmation from "./Confirmation"; // for confirmation page
import OrderHistory from "./OrderHistory"; // for order history page
import AboutUs from "./AboutUs"; // for about us page

import { ErrorPage } from "./ErrorPage"; // for error page

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
