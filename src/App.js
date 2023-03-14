import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Upload from "./components/Upload";
import Videos from "./components/Video";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos /> } />
        <Route path="/upload" element={<Upload /> } />
        <Route path="/login" element={<Login /> } />
        <Route path="/signup" element={<Signup /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
