import React, { useEffect } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Typography } from "@mui/joy";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { Product } from "../../../lib/types/product";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)), // => setPopularDishes commandasini setPopularDishes reduceri orqali hosil qilib oldik
});
const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

function Products() {
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 8,
        order: "createdAt",
        productCollection: ProductCollection.DISH,
        search: "",
      })
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"} mt={"83px"}>
          <Stack className="avatar-big-box">
            <Typography className={"title"}>Burak Restaurant</Typography>
            <Box className="search">
              <input type="text" className="input" placeholder="Type here" />
              <Button variant={"contained"} className="btn">
                Search <SearchIcon />
              </Button>
            </Box>
          </Stack>
          <Stack className="dishes-filter-section">
            <Stack className="dishes-filter-box">
              <Box>
                <Button variant={"contained"} color="primary">
                  NEW
                </Button>
              </Box>
              <Box>
                <Button variant={"contained"} color="secondary">
                  PRICE
                </Button>
              </Box>
              <Box>
                <Button variant={"contained"} color="secondary">
                  VIEWS
                </Button>
              </Box>
            </Stack>
          </Stack>

          <Stack className="product-filter-section">
            <Stack className="sidebar-btns">
              <Button className="button" variant={"contained"} color="primary">
                DISH
              </Button>
              <Button
                className="button"
                variant={"contained"}
                color="secondary"
              >
                SALAD
              </Button>
              <Button
                className="button"
                variant={"contained"}
                color="secondary"
              >
                DRINK
              </Button>
              <Button
                className="button"
                variant={"contained"}
                color="secondary"
              >
                DESERT
              </Button>
              <Button
                className="button"
                variant={"contained"}
                color="secondary"
              >
                OTHER
              </Button>
            </Stack>
            <Stack className="product-wapper">
              {products.map((product: Product) => {
                const imagePath = `${serverApi}/${product.productImages[0]}`;
                const sizeVolume =
                  product.productCollection === ProductCollection.DRINK
                    ? product.productVolume + "l"
                    : product.productSize + "size";
                return (
                  <Stack key={product._id} className="product-card">
                    <Stack
                      className="product-img"
                      sx={{ backgroundImage: `url(${imagePath})` }}
                    >
                      <div className="product-sale"> {sizeVolume}</div>
                      <Button className="shop-btn">
                        <img
                          src="/icons/shopping-cart.svg"
                          style={{ display: "flex" }}
                          alt="#"
                        />
                      </Button>
                      <button className="view-btn">
                        <Badge
                          badgeContent={product.productViews}
                          color="secondary"
                        >
                          <RemoveRedEyeIcon
                            sx={{
                              color:
                                product.productViews === 0 ? "gray" : "white",
                            }}
                          />
                        </Badge>
                      </button>
                    </Stack>
                    <Box className="prduct-desc">
                      <span className="product-title">
                        {product.productName}
                      </span>
                      <div className="product-price">
                        <MonetizationOnIcon />
                        {product.productPrice}
                      </div>
                    </Box>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
          <Pagination
            count={3}
            page={1}
            renderItem={(item) => (
              <PaginationItem
                className="pagination"
                components={{
                  previous: ArrowBackIcon,
                  next: ArrowForwardIcon,
                }}
                {...item}
                color="secondary"
              />
            )}
          />
        </Stack>
      </Container>
      <div className="brands-frame">
        <Typography className="title">Our Family Brands</Typography>
        <div className="brands-detail">
          {" "}
          <div className="brands-item">
            {" "}
            <img src={"/img/gurme.webp"} alt="" className="img" />
          </div>
          <div className="brands-item">
            {" "}
            <img src={"/img/sweets.webp"} alt="" className="img" />
          </div>
          <div className="brands-item">
            {" "}
            <img src={"/img/seafood.webp"} alt="" className="img" />
          </div>
          <div className="brands-item">
            {" "}
            <img src={"/img/doner.webp"} alt="" className="img" />
          </div>
        </div>
      </div>
      <div className="address">
        <Container>
          <Stack className="our-addres">
            <Typography className="address-title">Our address</Typography>
            <Box>
              <iframe
                className="map-image"
                src="https://www.google.com/maps?q=Hosan+University+South+Korea&output=embed"
              ></iframe>
            </Box>
          </Stack>
        </Container>
      </div>
    </div>
  );
}

export default Products;
