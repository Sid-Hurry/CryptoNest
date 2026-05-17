import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/about";
import Track from "./pages/track";
import Compare from "./pages/compare";
import Coin from "./pages/Coin";
import Market from "./pages/Market";
import Portfolio from "./pages/Portfolio";
import PortfolioProvider from "./context/PortfolioContext";

function App() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen flex flex-col relative z-0">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/track" element={<Track />} />
            <Route path="/market" element={<Market />} />
            <Route path="/portfolio" element={<Portfolio />} />

            <Route path="/compare" element={<Compare />} />
            <Route path="/coin/:coinID" element={<Coin />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </PortfolioProvider>
  );
}

export default App;
