import { useState, SyntheticEvent } from "react";
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/order.css";

function OrdersPage() {
  const [value, setValue] = useState("1");
  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="order-page">
      <Container className="order-container">
        <Stack className="order-left">
          <TabContext value={value}>
            <Box className="order-nav-frame">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="table_list"
                >
                  <Tab label="PAUSED ORDERS" value={"1"} />
                  <Tab label="PROCESS ORDERS" value={"2"} />
                  <Tab label="FINISHED ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className="order-main-content">
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>
        <Stack className="order-right">
          <Box className="order-info-box">
            <Box className="member-box">
              <Box className="order-user-img">
                <img
                  src="/icons/default-user.svg"
                  alt="user"
                  className="order-user-avatar"
                />
                <Box className="order-user-icon-box">
                  <img
                    src="/icons/user-badge.svg"
                    alt="icon"
                    width={20}
                    className="order-user-prof-img"
                  />
                </Box>
              </Box>

              <Box className="order-user-name">Justin</Box>
              <Box className="order-user-prof">USER</Box>
            </Box>

            <Box className="liner"></Box>

            <Box className="order-user-address">
              <LocationOnIcon />
              <Box className="spec-address-txt">South Korea, Busan</Box>
            </Box>
          </Box>

          <Box className="order-info-box">
            <input
              className="card-input"
              placeholder="Card number : 5243 4090 2002 7495"
            />

            <Stack direction="row" justifyContent="space-between">
              <input className="card-half-input" placeholder="07 / 24" />
              <input className="card-half-input" placeholder="CVV : 010" />
            </Stack>

            <input className="card-input" placeholder="Justin Robertson" />

            <Box className="cards-box">
              <img src="/icons/master-card.svg" width={50} />
              <img src="/icons/western-card.svg" width={50} />
              <img src="/icons/visa-card.svg" width={50} />
              <img src="/icons/paypal-card.svg" width={50} />
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default OrdersPage;
