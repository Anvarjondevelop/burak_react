import React from "react";
import "../css/app.css";
import { Box, Button, Container, Stack,  Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";
import { Link, Route, Router, Switch } from "react-router-dom";
import HomePage from "./screens/homePage";
import MemberPage from "./screens/userPage";
import OrdersPage from "./screens/ordersPage";
import ProductsPage from "./screens/productsPage";

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/products">ProductsPage</Link>
          </li>
          <li>
            <Link to="/orders">OrdersPage</Link>
          </li>
          <li>
            <Link to="/member-page">MemberPage</Link>
          </li>
          <li>
            <Link to="/">HomePage</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}








