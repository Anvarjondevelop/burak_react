import React from "react";
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
function Products() {
  const products = [
    { productName: "Lavash", imagePath: "/img/cutlet.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
  ];

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
              {products.map((product, index) => {
                return (
                  <Stack key={index} className="product-card">
                    <Stack
                      className="product-img"
                      sx={{ backgroundImage: `url(${product.imagePath})` }}
                    >
                      <div className="product-sale"> Normal size</div>
                      <Button className="shop-btn">
                        <img
                          src="/icons/shopping-cart.svg"
                          style={{ display: "flex" }}
                        />
                      </Button>
                      <button className="view-btn">
                        <Badge badgeContent={20} color="secondary">
                          <RemoveRedEyeIcon
                            sx={{ color: true ? "gray" : "white" }}
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
                        {14}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.551947325044!2d129.07617637625796!3d35.2674009525951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1520f94a60ce20f5%3A0xebe3b2ebac044325!2z67aA7IKw7Jm46rWt7Ja064yA7ZWZ6rWQ!5e0!3m2!1sko!2skr!4v1771736032229!5m2!1sko!2skr"
              ></iframe>
            </Box>
          </Stack>
        </Container>
      </div>
    </div>
  );
}

export default Products;
