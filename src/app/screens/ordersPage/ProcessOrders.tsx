import React from "react";
import { Box, Stack, Button } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";

export default function ProcessOrders() {
  return (
    <TabPanel value={"2"}>
      <Stack>
        {[1, 2].map((ele, index) => (
          <Box key={index} className="order-main-box">
            <Box className="order-box-scroll">
              {["Kebab", "Kazan kebab", "Steak"].map((item, i) => (
                <Box key={i} className="orders-name-price">
                  <img src="/img/kebab.webp" className="order-dish-img" />
                  <p className="title-dish">{item}</p>

                  <Box className="price-box">
                    <p>$12</p>
                    <p>×</p>
                    <p>3</p>
                    <p>=</p>
                    <p>$36</p>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box className="total-price-box">
              <Box className="box-total">
                <p>Product price</p>
                <p className="data-compl">$62</p>
                <p>+</p>
                <p>Delivery cost</p>
                <p className="data-compl">$7</p>
                <p>=</p>
                <p>Total</p>
                <p className="data-compl">$69</p>
              </Box>

              <p style={{ fontSize: "14px", color: "#616164" }}>
                {moment().format("YY-MM-DD HH:mm")}
              </p>

              <Button className="verify-button" variant="contained">
                VERIFY TO FULFIL
              </Button>
            </Box>
          </Box>
        ))}
        {false && (
          <Box display="flex" flexDirection="row" justifyContent="center">
            <img
              src="/icons/noimage-list.svg"
              style={{ width: 300, height: 300 }}
              alt="no-orders"
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}
