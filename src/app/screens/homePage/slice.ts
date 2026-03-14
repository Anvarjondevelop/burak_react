import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";
//boshlang'ich ma'lumot
const initialState: HomePageState = {
  popularDishes: [],
  newDishes: [],
  topUsers: [],
};

const homePageSlice = createSlice({
  //Redux Toolkit dagi funksiya bo‘lib, state + reducerlarni bitta joyda yaratish uchun ishlatiladi.
  name: "homePage", // slice nomi
  initialState, //state ning boshlang‘ich qiymati.
  reducers: {
    // yuqoridagi ma'lumotlarni o'zgartiruvchi functions
    setPopularDishes: (state, action) => {
      // state => yuqoridagi HomePageState
      // action =>reducer ga tashqaridan kelgan ma’lumotni olib kirish.
      state.popularDishes = action.payload;
      //action.payload → backenddan kelgan data => popularDishes ni yangi data bilan yangilaydi
    },
    setNewDishes: (state, action) => {
      state.newDishes = action.payload;
    },
    setTopUsers: (state, action) => {
      state.topUsers = action.payload;
      //Backenddan kelgan top userlar ni state ga saqlaydi.
    },
  },
});

export const { setPopularDishes, setNewDishes, setTopUsers } =
  homePageSlice.actions; // bu actionlarni tashqarida ishlatish uchun export qilindi

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
// storega homePageSlice ga daxldor bo'lgan reducerni yaxlit holda tashqariga export qilindi
