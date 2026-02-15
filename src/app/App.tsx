import React from "react";
import "../css/app.css";

import { Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./screens/homePage";
import MemberPage from "./screens/userPage";
import OrdersPage from "./screens/ordersPage";
import ProductsPage from "./screens/productsPage";
import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footer";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/app.css";
import HelpPage from "./screens/helpPage";

export default function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <MemberPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
