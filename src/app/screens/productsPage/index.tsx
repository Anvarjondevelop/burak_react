import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import Products from "./Products";
import ChosenProduct from "./ChosenProduct";

function ProductsPage() {
  const products = useRouteMatch(); //bu hook filega yo'naltirilgan pathni bilish uchun kerak
  // console.log("products", products);
  return (
    <div className={"products-page"}>
      <Switch>
        <Route path={`${products.path}/:productId`}>
          {/* Nested Routing tizimi  */}
          <ChosenProduct />
        </Route>
        <Route path={`${products.path}`}>
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default ProductsPage;
