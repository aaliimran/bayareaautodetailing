import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Pricing from "./components/pricing/Pricing.jsx";
import About from "./components/about/About.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import Contact from "./components/contact/Contact.jsx";
import Send from "./components/send/Send.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/send" element={<Send />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
