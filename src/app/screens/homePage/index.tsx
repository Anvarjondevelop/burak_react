import React from "react";

import "../../../css/home.css";
import Advertaisment from "./Advertisement";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";

import ActiveUser from "./ActiveUsers";
import Events from "./Events";

function homePage() {
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

export default homePage;
