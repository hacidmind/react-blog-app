// import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import ErrPage from './components/ErrPage'
import Blogpage from "./components/BlogPage";
import Newblog from "./components/NewBlog";

function App() {

  return (
    <BrowserRouter>
    <Nav />
    <Routes>
    <Route path='/blog' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<ErrPage />} />
        <Route path='/blog/:id' element={<Blogpage />}  />
        <Route path='/newblog' element={<Newblog />}  />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
