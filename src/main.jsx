import React from "react";
import { createRoot } from "react-dom/client";
import WendaEditorialPortfolio from "../wenda_editorial_portfolio_homepage.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WendaEditorialPortfolio />
  </React.StrictMode>
);
