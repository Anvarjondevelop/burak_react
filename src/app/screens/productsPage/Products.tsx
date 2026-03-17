import React, { ChangeEvent, useEffect, useState } from "react";
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
import { Product, ProductInquiry } from "../../../lib/types/product";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router";

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
  const [productSearch, setProductSearch] = useState<ProductInquiry>({
    page: 1,
    limit: 8,
    order: "createdAt",
    productCollection: ProductCollection.DISH,
    search: "",
  });
  const [searchText, setSearchText] = useState<string>("");
  const history = useHistory();

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts(productSearch)
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [productSearch]);

  useEffect(() => {
    if (searchText === "") {
      productSearch.search = "";
      setProductSearch({ ...productSearch });
    }
  }, [searchText]);

  /** HANDLER **/

  const searchCollectionHandler = (collection: ProductCollection) => {
    productSearch.page = 1;
    productSearch.productCollection = collection;
    setProductSearch({ ...productSearch }); //useEffect qayta ishga tushadi
  };

  const searchOrderHandler = (order: string) => {
    productSearch.page = 1;
    productSearch.order = order;
    setProductSearch({ ...productSearch }); //useEffect qayta ishga tushadi
  };

  const searchProductHandler = () => {
    productSearch.search = searchText;
    setProductSearch({ ...productSearch });
  };

  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
    productSearch.page = value;
    setProductSearch({ ...productSearch });
  };

  const chooseDishHandler = (id: string) => {
    history.push(`/products/${id}`);
  };

  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"} mt={"83px"}>
          <Stack className="avatar-big-box">
            <Typography className={"title"}>Burak Restaurant</Typography>
            <Box className="search">
              <input
                type="text"
                className="input"
                placeholder="Type here"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") searchProductHandler();
                }}
              />
              <Button
                variant={"contained"}
                className="btn"
                onClick={searchProductHandler}
              >
                Search <SearchIcon />
              </Button>
            </Box>
          </Stack>
          <Stack className="dishes-filter-section">
            <Stack className="dishes-filter-box">
              <Box>
                <Button
                  variant={"contained"}
                  color={
                    productSearch.order === "createdAt"
                      ? "primary"
                      : "secondary"
                  }
                  className="order"
                  onClick={() => searchOrderHandler("createdAt")}
                >
                  NEW
                </Button>
              </Box>
              <Box>
                <Button
                  variant={"contained"}
                  className="order"
                  color={
                    productSearch.order === "productPrice"
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() => searchOrderHandler("productPrice")}
                >
                  PRICE
                </Button>
              </Box>
              <Box>
                <Button
                  variant={"contained"}
                  className="order"
                  color={
                    productSearch.order === "productViews"
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() => searchOrderHandler("productViews")}
                >
                  VIEWS
                </Button>
              </Box>
            </Stack>
          </Stack>

          <Stack className="product-filter-section">
            <Stack className="sidebar-btns">
              <Button
                className="button"
                variant={"contained"}
                color={
                  productSearch.productCollection === ProductCollection.DISH
                    ? "primary"
                    : "secondary"
                }
                onClick={() => searchCollectionHandler(ProductCollection.DISH)}
              >
                DISH
              </Button>
              <Button
                className="button"
                variant={"contained"}
                color={
                  productSearch.productCollection === ProductCollection.SALAD
                    ? "primary"
                    : "secondary"
                }
                onClick={() => searchCollectionHandler(ProductCollection.SALAD)}
              >
                SALAD
              </Button>
              <Button
                className="button"
                variant={"contained"}
                color={
                  productSearch.productCollection === ProductCollection.DRINK
                    ? "primary"
                    : "secondary"
                }
                onClick={() => searchCollectionHandler(ProductCollection.DRINK)}
              >
                DRINK
              </Button>
              <Button
                className="button"
                variant={"contained"}
                color={
                  productSearch.productCollection === ProductCollection.DESERT
                    ? "primary"
                    : "secondary"
                }
                onClick={() =>
                  searchCollectionHandler(ProductCollection.DESERT)
                }
              >
                DESERT
              </Button>
              <Button
                className="button"
                variant={"contained"}
                color={
                  productSearch.productCollection === ProductCollection.OTHER
                    ? "primary"
                    : "secondary"
                }
                onClick={() => searchCollectionHandler(ProductCollection.OTHER)}
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
                  <Stack
                    key={product._id}
                    className={"product-card"}
                    onClick={() => chooseDishHandler(product._id)}
                  >
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
            count={
              products.length !== 0
                ? productSearch.page + 1
                : productSearch.page
            }
            page={productSearch.page}
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
            onChange={paginationHandler}
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
