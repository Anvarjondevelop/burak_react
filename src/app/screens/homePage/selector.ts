import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;
//Bu selector function bo‘lib, global redux state (AppRootState) ichidan homePage slice state ni qaytaradi.

export const retrievePopularDishes = createSelector(
  selectHomePage, // birinchi argument yuqoridagi const
  (HomePage) => HomePage.popularDishes // HomePage ni qo'lga kiritib olib ichidan popularDishesni eng oxirgi qiymatini qabul qilib beradi Agar state o‘zgarmagan bo‘lsa, selector qayta hisoblanmaydi va eski natijani qaytaradi.
);

export const retrieveNewDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newDishes
);

export const retrieveTopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers
);
