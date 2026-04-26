import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { RouteScrollReset } from "@/components/RouteScrollReset";
import "./styles.css";

import Index from "./routes/index";
import About from "./routes/about";
import Contact from "./routes/contact";
import Gallery from "./routes/gallery";
import Menu from "./routes/menu";
import Reservations from "./routes/reservations";
import NotFound from "./routes/not-found";
import FAQ from "./routes/faq";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteScrollReset />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster richColors position="top-right" />
    </BrowserRouter>
  </React.StrictMode>
);
