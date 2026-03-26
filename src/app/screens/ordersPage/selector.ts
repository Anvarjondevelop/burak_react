import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectOrdersPage = (state: AppRootState) => state.ordersPage;
//Bu selector function bo‘lib, global redux state (AppRootState) ichidan homePage slice state ni qaytaradi.

export const retrievePausedOrders = createSelector(
  selectOrdersPage, // birinchi argument yuqoridagi const
  (OrdersPage) => OrdersPage.pausedOrders // HomePage ni qo'lga kiritib olib ichidan popularDishesni eng oxirgi qiymatini qabul qilib beradi Agar state o‘zgarmagan bo‘lsa, selector qayta hisoblanmaydi va eski natijani qaytaradi.
);

export const retrieveProcessOrders = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.processOrders
);

export const retrieveFinishedOrders = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.finishedOrders
);
