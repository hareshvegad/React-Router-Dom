import './App.css';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import About from './About'; 
import Contact from './Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './User';
import Github from './Github';

function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='user/:userid' element={<User />}></Route>
        <Route path='github' element={<Github />}></Route>
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
