import React, { useEffect } from "react";
import Advertaisment from "./Advertisement";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import ActiveUser from "./ActiveUsers";
import Events from "./Events";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import "../../../css/home.css";

/** REDUX SLICE & SELECTOR **/
//Redux da state ni o‘zgartirish uchun dispatch qilish kerak
// databasedan ma'lumot olib storega joylayapdi
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)), // => setPopularDishes commandasini setPopularDishes reduceri orqali hosil qilib oldik
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
});
//Bu Redux state dan ma'lumot olish uchun optimizatsiya qilingan selector

function HomePage() {
  //3//Selector: Store => Data
  const { setPopularDishes, setNewDishes } = actionDispatch(useDispatch());
  // console.log(process.env.REACT_APP_API_URL);

  useEffect(() => {
    //1//Backend server data request => Data
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        setPopularDishes(data);
      })
      .catch((err) => console.log(err));

    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        setNewDishes(data);
      })
      .catch((err) => console.log(err));

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

//har qanday fronteddan 4 ta jaroy bo'ladi
//1 Backenddan ma'lumot olish
//Redux ga joylashtirish
//3 Reduxni orqali datani chaqirish
//intraction
