import React, { useEffect } from "react";

import "../../../css/home.css";
import Advertaisment from "./Advertisement";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";

import ActiveUser from "./ActiveUsers";
import Events from "./Events";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setNewDishes, setPopularDishes, setTopUsers } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { Member } from "../../../lib/types/member";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)), // => setPopularDishes commandasini setPopularDishes reduceri orqali hosil qilib oldik
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),
});

const PopularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
);

function HomePage() {
  //3
  //Selector: Store => Data
  const { setPopularDishes, setNewDishes, setTopUsers } = actionDispatch(
    useDispatch()
  );
  // function component ichida setPopularDishes ni caqirib qo'lga olyapmiz
  const { popularDishes } = useSelector(PopularDishesRetriever);
  useEffect(() => {
    //1//Backend server data request => Data
    //2//Slice: Data => Store
  }, []);
  // console.log("popularDishes: ", popularDishes);
  return (
    <div className="homepage">
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertaisment />
      <ActiveUser />
      <Events />
    </div>
  );
}

export default HomePage;
