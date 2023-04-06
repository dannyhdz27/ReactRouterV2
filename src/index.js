import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Main />);
