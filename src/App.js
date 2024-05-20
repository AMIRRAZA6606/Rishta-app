
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Loginform } from './auth/LoginForm/Loginform';
import Profile from './pages/profile-page/Index';
import Home from './pages/home-page/Index';
import Message from './pages/message-page/Index';
import About from './pages/about-page/Index';
import Connections from "./pages/connections-page/Index"
// import ContactUs from "./pages/contact-us-page/Index"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/home" element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="/search" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/connections" element={<Connections />} />
        {/* <Route path="/contact-us" element={<ContactUs />} /> */}
      </Routes>
    </>
  );
}

export default App;
