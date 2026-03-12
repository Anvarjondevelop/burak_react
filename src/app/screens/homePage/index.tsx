import React, { useEffect } from "react";

import "../../../css/home.css";
import Advertaisment from "./Advertisement";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";

import ActiveUser from "./ActiveUsers";
import Events from "./Events";

function HomePage() {
  //3
  //Selector: Store => Data

  useEffect(() => {
    //1//Backend server data request => Data
    //2//Slice: Data => Store
  }, []);
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
