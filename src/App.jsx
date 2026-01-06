import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Track from "./pages/Track";
import Compare from "./pages/compare";
import Coin from "./pages/Coin";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/track" element={<Track />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/coin/:coinID" element={<Coin />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
