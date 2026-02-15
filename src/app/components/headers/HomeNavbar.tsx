import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

function HomeNavbar() {
  const authUser = null;

  return (
    <div className="home-navbar">
      <Container sx={{ mt: "55px", height: "642px" }}>
        <Stack
          sx={{ height: "50px" }}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box>
            <NavLink to={"/"}>
              <img
                style={{ width: "125px", height: "30px" }}
                src="/icons/burak.svg"
                alt=""
              />
            </NavLink>
          </Box>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            minWidth={"700px"}
            alignItems={"center"}
          >
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
                  Products
                </NavLink>{" "}
              </Box>
            ) : null}

            {authUser ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page">My page</NavLink>{" "}
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink activeClassName="underline" to="/help">
                Help
              </NavLink>
            </Box>

            {/** BASKET */}
            {!authUser ? (
              <Button
                className="login-button"
                variant="contained"
                style={{ background: "#3776CC" }}
              >
                Login
              </Button>
            ) : (
              <img />
            )}
          </Stack>
        </Stack>
        <Stack>DETAIL</Stack>
      </Container>
    </div>
  );
}

export default HomeNavbar;
