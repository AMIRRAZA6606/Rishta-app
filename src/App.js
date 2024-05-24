import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Loginform } from "./auth/LoginForm/Loginform";
import Profile from "./pages/profile-page/Index";
import Home from "./pages/home-page/Index";
import Message from "./pages/message-page/Index";
import About from "./pages/about-page/Index";
import Profiles from "./pages/profiles-page/Index";
import Friends from "./pages/friends-page/Index";
import { AuthProvider } from "./context/AuthContext";
import PollingComponent from "./context/PollingComponent";
// import ContactUs from "./pages/contact-us-page/Index"

function App() {
  return (
    <>
      <AuthProvider>
        <PollingComponent />

        <Routes>
          <Route path="/" element={<Loginform />} />
          <Route path="/home" element={<Home />} />
          <Route path="/message" element={<Message />} />
          <Route path="/search" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:profileId" element={<Profile />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/friends" element={<Friends />} />
          {/* <Route path="/contact-us" element={<ContactUs />} /> */}
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
