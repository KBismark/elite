import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes, //as Switch,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
//import Weather from "./components/Weather";
import {
  SlButton,
  SlCard,
  SlRating,
  SlIcon,
} from "@shoelace-style/shoelace/dist/react";
import testImage from "./test-image.webp";
import {
  BsCart3,
  BsChevronDown,
  BsHeart,
  BsPerson,
  BsSearch,
  BsStopCircle,
} from "react-icons/bs";
import { TiUser } from "react-icons/ti";
import shoekama_logo from "./images/shoelogo.png";

import ProductPage from "./components/poduct_page";
import { HomePage } from "./components/home_page";
import Category from "./components/categories";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:brand/:cost/:num" element={<ProductPage />} />
        <Route path="/category/:tab" element={<Category />} />
      </Routes>
    </Router>
  );
}
