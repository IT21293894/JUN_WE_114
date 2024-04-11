import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Odels from "./components/Odels";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import CoolPlanet from "./components/CoolPlanet";
import MallSearch from "./components/MallSearch";

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/odels" element={<Odels />} />
          <Route path="/coolplanets" element={<CoolPlanet />} />
          <Route path="/mall" element={<MallSearch />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
