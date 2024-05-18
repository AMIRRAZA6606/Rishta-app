
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Loginform } from './auth/LoginForm/Loginform';
import Profile from './pages/profile-page/Index';
import Home from './pages/home-page/Index';
import Message from './pages/message-page/Index';
import About from './pages/about-page/Index';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/home" element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="/search" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
