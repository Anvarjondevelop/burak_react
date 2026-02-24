import React from "react";
import { Box, Stack, Button } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

export default function PausedOrders() {
  const data = ["Steak", "Fried chicken", "Winner"];
  return (
    <TabPanel value={"1"}>
      <Stack>
        {[1, 2].map((ele, index) => (
          <Box key={index} className="order-main-box">
            <Box className="order-box-scroll">
              {["Kebab", "Kazan kebab", "Steak"].map((item, i) => (
                <Box key={i} className="orders-name-price">
                  <img src="/img/kebab.webp" className="order-dish-img" />
                  <p className="title-dish">{item}</p>

                  <Box className="price-box">
                    <p>$10</p>
                    <p>×</p>
                    <p>2</p>
                    <p>=</p>
                    <p>$20</p>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box className="total-price-box">
              <Box className="box-total">
                <p>Product price</p>
                <p className="data-compl">$60</p>
                <p>+</p>
                <p>Delivery cost</p>
                <p className="data-compl">$5</p>
                <p>=</p>
                <p>Total</p>
                <p className="data-compl">$65</p>
              </Box>

              <Button className="cancel-button" variant="contained">
                CANCEL
              </Button>

              <Button className="pay-button" variant="contained">
                PAYMENT
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
