import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";
import SignIn from "./pages/SingIn";
import SignUp from "./pages/SingUp";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
             <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    <Footer />
    </>
  );
}