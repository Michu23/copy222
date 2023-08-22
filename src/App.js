import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Flair from "./components/Flair";
import Coming from "./pages/Coming";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Demo from "./components/Demo";

import { StateProvider } from "./context/StateContext";
import Industries from "./pages/Industries";

function App() {
  return (
    <Router>
      <StateProvider>
      <Header />
      <Demo />
      <Flair />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Coming />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogcontent/:id" element={<Blog />} />
          <Route path="/industries" element={<Industries />} />
        </Routes>
      <Footer />
      </StateProvider>
    </Router>
  );
}

export default App;
