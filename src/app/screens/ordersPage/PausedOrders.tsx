import React from "react";
import { Box, Stack, Button } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePausedOrders } from "./selector";
import { Messages, serverApi } from "../../../lib/config";
import { Order, OrderItem, OrderUpdateInput } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";
import { T } from "../../../lib/types/common";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { OrderStatus } from "../../../lib/enums/order.enum";

import OrderService from "../../services/OrderService";
import { UseGlobals } from "../../hooks/useGlobals";

const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({ pausedOrders })
);

interface PausedOrdersProps {
  setValue: (input: string) => void;
}

export default function PausedOrders(props: PausedOrdersProps) {
  const { setValue } = props;
  const { authMember, setOrderBuilder } = UseGlobals();
  const { pausedOrders } = useSelector(pausedOrdersRetriever);

  /** HANDLERS */

  const deleteOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      const orderId = e.target.value;

      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.DELETE,
      };

      const confirmation = window.confirm("Do you want to delete the order?");
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder(input);
        setOrderBuilder(new Date());
      }
    } catch (error) {
      console.log("Error deleteOrderHandler: ", error);
      sweetErrorHandling(error).then();
    }
  };

  const processOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);

      // PAYMENT PROCESS
      const orderId = e.target.value;

      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.PROCESS,
      };

      const confirmation = window.confirm("Do you want to proceed the order");
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder(input);

        setValue("2");
        setOrderBuilder(new Date());
      }
    } catch (error) {
      console.log("Error deleteOrderHandler: ", error);
      sweetErrorHandling(error).then();
    }
  };

  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders.map((order: Order) => {
          return (
            <Box key={order._id} className="order-main-box">
              <Box className="order-box-scroll">
                {order?.orderItem?.map((item: OrderItem) => {
                  const product: Product = order.productData.filter(
                    (ele: Product) => item.productId === ele._id
                  )[0];
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  return (
                    <Box key={item._id} className="orders-name-price">
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

                <Button
                  value={order._id}
                  onClick={deleteOrderHandler}
                  className="cancel-button"
                  variant="contained"
                >
                  CANCEL
                </Button>

                <Button
                  value={order._id}
                  onClick={processOrderHandler}
                  className="pay-button"
                  variant="contained"
                >
                  PAYMENT
                </Button>
              </Box>
            </Box>
          );
        })}
        {!pausedOrders ||
          (pausedOrders.length === 0 && (
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
