import Header from "./components/Header";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Practice from "./pages/Practice";
import Learn from "./pages/Learn";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
