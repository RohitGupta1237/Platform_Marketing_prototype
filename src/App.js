import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import LoginPage from "./influencer";
import LoginPage1 from "./loginpage";
import RegistrationForm from "./register";
import ProfilePage from "./profilepage";
import Appservice from "./typeofservice";
function App() {
  return (
    
        <BrowserRouter className="font-cereal-font">
       <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/profile" element={<ProfilePage/>}/>
         <Route path="/register" element={<RegistrationForm/>}/>
         <Route path="/influencerlogin" element={<LoginPage1/>}/>
         <Route path="/selectservice" element={<Appservice/>}/>




       </Routes>
     </BrowserRouter>

  );
}

export default App;
