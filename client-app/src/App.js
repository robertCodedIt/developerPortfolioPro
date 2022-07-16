// import "./App.scss";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./pages/About";       

 import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>

        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>{" "}
    </Router>
  );
}

export default App;
