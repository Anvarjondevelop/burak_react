import {
  Box,
  Button,
  Container,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import React, { useEffect, useState } from "react";
import { CartItem } from "../../../lib/types/search";
import { UseGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../lib/config";
import { Logout } from "@mui/icons-material";

interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
  handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  handleCloseLogout: () => void;
  handleLogoutRequest: () => void;
}

function HomeNavbar(props: HomeNavbarProps) {
  const {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
    setSignupOpen,
    setLoginOpen,
    handleLogoutClick,
    handleCloseLogout,
    anchorEl,
    handleLogoutRequest,
  } = props;

  const { authMember } = UseGlobals();

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

            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink activeClassName="underline" to="/orders">
                  Orders
                </NavLink>{" "}
              </Box>
            ) : null}

            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page">My page</NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink activeClassName="underline" to="/help">
                Help
              </NavLink>
            </Box>
            {/** BASKET */}
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />

            {!authMember ? (
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
                src={
                  authMember?.memberImage
                    ? `${serverApi}/${authMember?.memberImage}`
                    : "/icons/default-user.svg"
                }
                aria-haspopup={"true"}
                onClick={handleLogoutClick}
                alt=""
              />
            )}
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={Boolean(anchorEl)}
              onClose={handleCloseLogout}
              onClick={handleCloseLogout}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleLogoutRequest}>
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: "blue" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
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
              {authMember ? (
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
