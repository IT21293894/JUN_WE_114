import "./App.css";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Fashion from "./components/Fashion";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MallSearch from "./components/MallSearch";

function App() {
  return (
    <HelmetProvider>
       <Router>
    <div className="App">
    <Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/about" element={<AboutUs />}></Route>
  <Route path="/fashion" element={<Fashion/>} />
  <Route path="/mall" element={<MallSearch/>} />

</Routes>
    </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;
