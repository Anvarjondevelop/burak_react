import React from "react";
import { Box, Stack, Button } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveProcessOrders } from "./selector";
import { Messages, serverApi } from "../../../lib/config";
import { Order, OrderUpdateInput } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";

import { T } from "../../../lib/types/common";
import { OrderStatus } from "../../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { UseGlobals } from "../../hooks/useGlobals";

const processOrdersRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({ processOrders })
);
interface PausedOrdersProps {
  setValue: (input: string) => void;
}

export default function ProcessOrders(props: PausedOrdersProps) {
  const { processOrders } = useSelector(processOrdersRetriever);
  const { setValue } = props;
  const { authMember, setOrderBuilder } = UseGlobals();

  /** HANDLERS */

  const finishOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      const orderId = e.target.value;

      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.FINISH,
      };

      const confirmation = window.confirm("Have you received your order");
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder(input);

        setValue("3");
        setOrderBuilder(new Date());
      }
    } catch (error) {
      console.log("Error deleteOrderHandler: ", error);
      sweetErrorHandling(error).then();
    }
  };

  return (
    <TabPanel value={"2"}>
      <Stack>
        {processOrders.map((order: Order) => {
          return (
            <Box key={order._id} className="order-main-box">
              <Box className="order-box-scroll">
                {order?.orderItem?.map((item, i) => {
                  const product: Product = order.productData.filter(
                    (ele: Product) => item.productId === ele._id
                  )[0];
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  return (
                    <Box key={i} className="orders-name-price">
                      <img src={imagePath} className="order-dish-img" alt="" />
                      <p className="title-dish">{product.productName}</p>

                      <Box className="price-box">
                        <p>${item.itemPrice}</p>
                        <p>×</p>
                        <p>{item.itemQuantity}</p>
                        <p>=</p>
                        <p>${item.itemQuantity * item.itemPrice}</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className="total-price-box">
                <Box className="box-total">
                  <p>Product price</p>
                  <p className="data-compl">
                    ${order.orderTotal - order.orderDelivery}
                  </p>
                  <p>+</p>
                  <p>Delivery cost</p>
                  <p className="data-compl">${order.orderDelivery}</p>
                  <p>=</p>
                  <p>Total</p>
                  <p className="data-compl">${order.orderTotal}</p>
                </Box>

                <p style={{ fontSize: "14px", color: "#616164" }}>
                  {moment().format("YY-MM-DD HH:mm")}
                </p>

                <Button
                  value={order._id}
                  onClick={finishOrderHandler}
                  className="verify-button"
                  variant="contained"
                >
                  VERIFY TO FULFIL
                </Button>
              </Box>
            </Box>
          );
        })}
        {!processOrders ||
          (processOrders.length === 0 && (
            <Box display="flex" flexDirection="row" justifyContent="center">
              <img
                src="/icons/noimage-list.svg"
                style={{ width: 300, height: 300 }}
                alt="no-orders"
              />
            </Box>
          ))}
      </Stack>
    </TabPanel>
  );
}
