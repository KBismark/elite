import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes, //as Switch,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import {
  BsCart3,
  BsHeartFill,
  BsChevronDown,
  BsHeart,
  BsPerson,
  BsSearch,
  BsStopCircle,
} from "react-icons/bs";

import sample_image1 from "../images/sample_shoe2.png";
import testImage from "../test-image.webp";
import TopSVG from "../images/top_svg";
import E21 from "../images/E21.png";
import E51 from "../images/E51.png";
import E61 from "../images/E61.png";
import birk_logo from "../images/birk_logo.png";
import vans_logo from "../images/vans_logo.png";
import converse from "../images/converse.png";
import vans from "../images/vans.png";
import birk from "../images/birk.png";
import addidas from "../images/addidas.png";
import nike from "../images/nike.png";
import puma from "../images/puma.png";

import Head from "./header";
import ScrollSpace from "./scroll_space";

import p1 from "../product/p1.4.webp";
import p2 from "../product/p2.1.webp";
import p3 from "../product/p3.2.webp";
import p4 from "../product/p4.1.jpg";

var name1 = "KBis",
  name2 = "Nana",
  name3 = "Vinci";

function HomePage() {
  var s = 0;
  var brands = [
    BrandProducts({
      num: 0,
      productName: "Chuck Taylor All Star Madison Low Top ",
      cost: 129,
      imageSrc: "",
      styles: "",
      key: "f1",
      previousCost: 129 + 129 * 0.2,
    }).Element(),
    BrandProducts({
      num: 1,
      productName: "Chuck Taylor All Star Madison Low Top ",
      cost: 129,
      imageSrc: "",
      styles: "",
      key: "f2",
      previousCost: 129 + 129 * 0.2,
    }).Element(),
    BrandProducts({
      num: 2,
      productName: "Chuck Taylor All Star Madison Low Top ",
      cost: 129,
      imageSrc: "",
      styles: "",
      key: "f3",
      previousCost: 129 + 129 * 0.2,
    }).Element(),
    BrandProducts({
      num: 3,
      productName: "Chuck Taylor All Star Madison Low Top ",
      cost: 129,
      imageSrc: "",
      styles: "",
      key: "f4",
      previousCost: 129 + 129 * 0.2,
    }).Element(),
    BrandProducts({
      num: 4,
      productName: "Chuck Taylor All Star Madison Low Top ",
      cost: 129,
      imageSrc: "",
      styles: "",
      key: "f5",
      previousCost: 129 + 129 * 0.2,
    }).Element(),
    BrandProducts({
      num: 0,
      productName: "Chuck Taylor All Star Madison Low Top ",
      cost: 129,
      imageSrc: "",
      styles: "",
      key: "f6",
      previousCost: 129 + 129 * 0.2,
    }).Element(),
    BrandProducts({
      num: 1,
      productName: "Chuck Taylor All Star Madison Low Top ",
      cost: 129,
      imageSrc: "",
      styles: "",
      key: "f7",
      previousCost: 129 + 129 * 0.2,
    }).Element(),
    BrandProducts({
      num: 2,
      productName: "Chuck Taylor All Star Madison Low Top ",
      cost: 129,
      imageSrc: "",
      styles: "",
      key: "f8",
      previousCost: 129 + 129 * 0.2,
    }).Element(),
    BrandProducts({
      num: 3,
      productName: "Chuck Taylor All Star Madison Low Top ",
      cost: 129,
      imageSrc: "",
      styles: "",
      key: "f9",
      previousCost: 129 + 129 * 0.2,
    }).Element(),
    BrandProducts({
      num: 4,
      productName: "Chuck Taylor All Star Madison Low Top ",
      cost: 129,
      imageSrc: "",
      styles: "",
      key: "f10",
    }).Element(),
    BrandProducts({
      num: 0,
      productName: "Chuck Taylor All Star Madison Low Top ",
      cost: 129,
      imageSrc: "",
      styles: "",
      key: "f11",
    }).Element(),
    BrandProducts({
      num: 1,
      productName: "Chuck Taylor All Star Madison Low Top ",
      cost: 129,
      imageSrc: "",
      styles: "",
      key: "f12",
    }).Element(),
    BrandProducts({
      num: 2,
      productName: "Chuck Taylor All Star Madison Low Top ",
      cost: 129,
      imageSrc: "",
      styles: "",
      key: "f13",
    }).Element(),
    BrandProducts({
      num: 3,
      productName: "Chuck Taylor All Star Madison Low Top ",
      cost: 129,
      imageSrc: "",
      styles: "",
      key: "f14",
    }).Element(),
  ];
  return (
    <>
      <Head />

      <h2
        style={{
          textTransform: "capitalize",
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        Ready to ship. Shop now
        <Link
          to="/"
          className="link"
          style={{
            marginLeft: 10,
            fontSize: "80%",
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          See more of these
        </Link>
      </h2>
      <div className="flex" style={{ marginLeft: 10, marginBottom: 30 }}>
        {" "}
        <span className="vertical-line"></span>{" "}
      </div>
      <ScrollSpace
        dotSize={7}
        dotPosition="bottom"
        maxPixelSpace={350}
        maxFittingContent={5}
        direction="row"
        styles={{
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
        }}
        elements={brands}
        marginBottom={30}
      />
      <h2
        style={{
          textTransform: "capitalize",
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        For gents - Casual, Sneakers, Shoes and more..
        <Link
          to="/"
          className="link"
          style={{
            marginLeft: 10,
            fontSize: "80%",
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          See more of these
        </Link>
      </h2>
      <div className="flex" style={{ marginLeft: 10, marginBottom: 30 }}>
        {" "}
        <span className="vertical-line"></span>{" "}
      </div>
      <ScrollSpace
        dotSize={7}
        dotPosition="bottom"
        maxPixelSpace={350}
        maxFittingContent={5}
        direction="row"
        styles={{
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
        }}
        elements={brands}
        marginBottom={30}
      />
      <h2
        style={{
          textTransform: "capitalize",
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        For ladies - Casual, Sneakers, Shoes and more..
        <Link
          to="/"
          className="link"
          style={{
            marginLeft: 10,
            fontSize: "80%",
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          See more of these
        </Link>
      </h2>
      <div className="flex" style={{ marginLeft: 10, marginBottom: 30 }}>
        {" "}
        <span className="vertical-line"></span>{" "}
      </div>
      <ScrollSpace
        dotSize={7}
        dotPosition="bottom"
        maxPixelSpace={350}
        maxFittingContent={5}
        direction="row"
        styles={{
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
        }}
        elements={brands}
        marginBottom={30}
      />
      <h2
        style={{
          textTransform: "capitalize",
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        For kids - Casual, Sneakers, Shoes and more..
        <Link
          to="/"
          className="link"
          style={{
            marginLeft: 10,
            fontSize: "80%",
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          See more of these
        </Link>
      </h2>
      <div className="flex" style={{ marginLeft: 10, marginBottom: 30 }}>
        {" "}
        <span className="vertical-line"></span>{" "}
      </div>
      <ScrollSpace
        dotSize={7}
        dotPosition="bottom"
        maxPixelSpace={350}
        maxFittingContent={5}
        direction="row"
        styles={{
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
        }}
        elements={brands}
        marginBottom={30}
      />

      <div
        style={{
          padding: "10px 10px 10px 10px",
          background: "rgba(255,0,0,0.02)",
          height: 300,
          //marginBottom:50
        }}
      >
        <h2
          style={{
            textTransform: "capitalize",
            marginLeft: 10,
            marginRight: 10,
            textAlign: "center",
          }}
        >
          View your favourite brands
        </h2>

        <div
          className="wrapper"
          style={{
            marginTop: 70,
            display: "none",
          }}
        >
          <div className="flex">
            <div>
              <div
                style={{
                  position: "relative",
                  marginRight: -20,
                }}
              >
                <img
                  src={E21}
                  style={{
                    width: 250,
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // background:"rgba(0,0,0,0.4)"
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      lineHeight: 1.5,
                      marginLeft: 15,
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    STEP IT UP WITH US
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  marginTop: -30,
                }}
              >
                <img
                  src={E51}
                  style={{
                    width: 300,
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // background:"rgba(0,0,0,0.4)"
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      lineHeight: 1.5,
                      marginRight: 45,
                      fontWeight: "bolder",
                      color: "#fff",
                      textShadow: 10,
                    }}
                  >
                    TAKE YOUR STYLE NEW HEIGHTS
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  position: "relative",
                  marginLeft: -20,
                }}
              >
                <img
                  src={E61}
                  style={{
                    width: 250,
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // background:"rgba(0,0,0,0.4)"
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2
        style={{
          textTransform: "capitalize",
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        New shoes on sale. Get 20% off
        <Link
          to="/"
          className="link"
          style={{
            marginLeft: 10,
            fontSize: "80%",
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          See more of these
        </Link>
      </h2>
      <div className="flex" style={{ marginLeft: 10, marginBottom: 30 }}>
        {" "}
        <span className="vertical-line"></span>{" "}
      </div>
      <ScrollSpace
        dotSize={7}
        dotPosition="bottom"
        maxPixelSpace={350}
        maxFittingContent={5}
        direction="row"
        styles={{
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
        }}
        elements={brands}
        marginBottom={30}
      />

      <h2
        style={{
          textTransform: "capitalize",
          marginLeft: 10,
          marginRight: 10,
          marginTop: "4rem",
        }}
      >
        Hot picks for you. Let your feet talk
      </h2>
      <div className="flex" style={{ marginLeft: 10, marginBottom: 30 }}>
        {" "}
        <span className="vertical-line"></span>{" "}
      </div>
      <ScrollSpace
        dotSize={7}
        dotPosition="bottom"
        maxPixelSpace={350}
        maxFittingContent={5}
        direction="row"
        styles={{
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
        }}
        elements={brands}
        marginBottom={30}
      />

      <footer
        style={{
          padding: "10px 10px 10px 10px",
          background: "rgba(255,0,0,0.03)",
          height: 300,
          marginTop: 60,
        }}
      >
        <div
          style={{
            padding: "1px",
            background: "rgba(255,0,0,0.08)",
            margin: "60px 0.3rem 0px 0.3rem",
            display: "none",
          }}
        ></div>
      </footer>
    </>
  );
}
function getStringCost(a) {
  a = a.split(".");
  if (a.length == 1) {
    return a[0];
  }
  return a[0] + "." + a[1].slice(0, 2);
}
var s = 0,
  zx = false;
function BrandProducts({
  productName,
  cost,
  imageSrc,
  styles,
  key,
  previousCost,
  showButtons,
  num,
  category,
  brand,
}) {
  s++;
  //var z=s%5;
  var z = num;
  return {
    values: {
      name: productName,
      cost: cost,
      num: num,
      brand: brand,
      category: category,
    },
    Element: function E() {
      const [imageLoading, setImageLoading] = useState(true);
      const [wishListed, addToWishList] = useState(false);
      const [heartScale, setHeartScale] = useState(false);
      const navigate = useNavigate();
      function ImageOnLoad() {
        setTimeout(() => {
          setImageLoading(false);
        }, 2000);
      }
      cost = getStringCost(`${cost}`);
      function viewProduct() {
        navigate(`/product/${brand}/${cost}/${num}`);
      }
      return (
        <div
          key={key + "" + s}
          className="brand-product"
          style={{
            // display:"flex",
            // flexDirection:"column",
            marginRight: 20,
            border: "0.5px solid rgba(0,0,0,0.1)",
            borderRadius: 5,
            padding: 7,
            cursor: "pointer",
            padding: "0px 10px",
          }}
        >
          {imageLoading ? (
            <div
              className="skeletonspace"
              style={{
                width: 230,
                height: 230,
                borderRadius: 7,
                marginTop: 7,
              }}
            ></div>
          ) : null}
          <div
            onClick={viewProduct}
            style={{
              display: imageLoading ? "none" : "block",
              //background:"red",
              paddingTop: 7,
            }}
          >
            <img
              onLoad={ImageOnLoad}
              slot="image"
              //src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt="A kitten sits patiently between a terracotta pot and decorative grasses."
              src={
                z == 0
                  ? p4
                  : z == 1
                    ? testImage
                    : z == 2
                      ? p1
                      : z == 3
                        ? p2
                        : p3
              }
              style={{
                display: "block",
                width: 230,
                borderRadius: 7,
              }}
              //className="product"
            />
          </div>
          <div
            style={{
              fontWeight: 500,
            }}
          >
            <h5
              style={{
                //fontStyle:"normal",
                fontWeight: "normal",
                marginTop: 10,
                marginBottom: 5,
              }}
            >
              {productName}
            </h5>
            <div className="flex space-bt">
              <span>
                GHS {cost}{" "}
                {previousCost ? (
                  <span
                    style={{
                      fontWeight: "normal",
                      textDecoration: "line-through",
                      fontSize: "80%",
                    }}
                  >
                    GHS {previousCost * 4}
                  </span>
                ) : null}
              </span>
              <div
                onClick={() => {
                  addToWishList(!wishListed);
                  setHeartScale(true);
                  setTimeout(() => {
                    setHeartScale(false);
                  }, 150);
                }}
                className="flex"
                style={{
                  alignItems: "center",
                  marginLeft: 8,
                  //background:"blue",
                  padding: 5,
                }}
              >
                {!showButtons ? null : wishListed ? (
                  <BsHeartFill
                    fontSize={23}
                    color="red"
                    transform={heartScale ? "scale(1.2)" : "scale(1)"}
                  />
                ) : (
                  <BsHeart fontSize={23} color="red" />
                )}
              </div>
            </div>
          </div>

          {showButtons ? (
            <button
              className="red-buttons v-hidden flex"
              style={{
                width: "100%",
                margin: "15px 0px",
                padding: "5px 3px 7px 3px",
                display: "block",
                borderRadius: 5,
              }}
              onClick={viewProduct}
            >
              <BsCart3 fontSize={19} strokeWidth={1} />
              <span
                style={{
                  fontWeight: "600",
                  marginLeft: 5,
                  fontSize: 15,
                }}
              >
                ADD TO CART
              </span>
            </button>
          ) : null}
        </div>
      );
    },
  };
}

export { HomePage, BrandProducts };
