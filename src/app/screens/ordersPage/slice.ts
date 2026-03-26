import { createSlice } from "@reduxjs/toolkit";
import { OrdersPageState } from "../../../lib/types/screen";
//boshlang'ich ma'lumot
const initialState: OrdersPageState = {
  pausedOrders: [],
  processOrders: [],
  finishedOrders: [],
};

const ordersPageSlice = createSlice({
  //Redux Toolkit dagi funksiya bo‘lib, state + reducerlarni bitta joyda yaratish uchun ishlatiladi.
  name: "ordersPage", // slice nomi
  initialState, //state ning boshlang‘ich qiymati.
  reducers: {
    // yuqoridagi ma'lumotlarni o'zgartiruvchi functions
    setPausedOrders: (state, action) => {
      // state => yuqoridagi HomePageState
      // action =>reducer ga tashqaridan kelgan ma’lumotni olib kirish.
      state.pausedOrders = action.payload;
      //action.payload → backenddan kelgan data => popularDishes ni yangi data bilan yangilaydi
    },
    setProcessOrders: (state, action) => {
      state.processOrders = action.payload;
    },
    setFinishedOrders: (state, action) => {
      state.finishedOrders = action.payload;
      //Backenddan kelgan top userlar ni state ga saqlaydi.
    },
  },
});

export const { setPausedOrders, setProcessOrders, setFinishedOrders } =
  ordersPageSlice.actions; // bu actionlarni tashqarida ishlatish uchun export qilindi

const OrdersPageReducer = ordersPageSlice.reducer;
export default OrdersPageReducer;
// storega homePageSlice ga daxldor bo'lgan reducerni yaxlit holda tashqariga export qilindi
