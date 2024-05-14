//React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import NavigationBar from "./components/UI/Navbar/NavigationBar";

//Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Edition from "./pages/Editions/Editions";
import Contact from "./pages/Contacts/Contact";
import Events from "./pages/FEvents/Events";
import Projects from "./pages/Projects/Projects";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/editions" element={<Edition />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
