import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importations des composants
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Error404 from "./components/Error404/Error404";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Router>
        <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </main>
          <Footer />
      </Router>
    </>
  )
}

export default App
