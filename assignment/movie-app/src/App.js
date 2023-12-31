import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "components/Footer";
import Navigation from "components/Navigation";
import Home from "pages/Home";
import About from "pages/About";
import Profile from "pages/Profile";
import SearchResults from "pages/SearchResults";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
        <Route path="/search" element={<SearchResults />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
