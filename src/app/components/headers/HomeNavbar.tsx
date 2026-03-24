import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import React, { useEffect, useState } from "react";
import { CartItem } from "../../../lib/types/search";

interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
}

function HomeNavbar(props: HomeNavbarProps) {
  const authUser = true;
  const {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
    setSignupOpen,
    setLoginOpen,
  } = props;

  /** HANDLERS **/

  return (
    <div className="home-navbar">
      <Container
        sx={{ mt: "55px", height: "642px" }}
        className="navbar-container"
      >
        <Stack className="menu">
          <Box>
            <NavLink to={"/"}>
              <img
                className="brand-logo"
                src="/icons/burak.svg"
                alt="burakLogo"
              />
            </NavLink>
          </Box>
          <Stack className="nav-links">
            <Box className={"hover-line"}>
              <NavLink activeClassName="underline" to="/">
                Home
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink activeClassName="underline" to="/products">
                Products
              </NavLink>
            </Box>

            {authUser ? (
              <Box className={"hover-line"}>
                <NavLink activeClassName="underline" to="/orders">
                  Orders
                </NavLink>{" "}
              </Box>
            ) : null}

            {authUser ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page">My page</NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink activeClassName="underline" to="/help">
                Help
              </NavLink>
            </Box>
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />
            {/** BASKET */}
            {!authUser ? (
              <Box>
                <Button
                  className="login-button"
                  variant="contained"
                  style={{ background: "#3776CC" }}
                  onClick={() => setLoginOpen(true)}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="user"
                src="/icons/default-user.svg"
                aria-haspopup={"true"}
                alt=""
              />
            )}
          </Stack>
        </Stack>
        <Stack className="header-frame">
          <Stack className="detail">
            <Box className="head-main-text">
              World's Most Delicious Cousine{" "}
            </Box>
            <Box className="wel-text">The Choice, not just a choice</Box>
            <Box className="service">24 hours service</Box>
            <Box style={{ marginTop: "73px" }}>
              {authUser ? (
                <Button
                  variant={"contained"}
                  className={"sign-up"}
                  onClick={() => setSignupOpen(true)}
                >
                  SIGN UP
                </Button>
              ) : null}
            </Box>
          </Stack>
          <Box className="logo-frame">
            <div className="logo-image"> </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default HomeNavbar;
