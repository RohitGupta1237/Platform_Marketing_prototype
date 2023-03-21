import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import LoginPage from "./influencer";


function App() {
  return (
    // <div className="App">
    //   <nav>
    //     <button className="button influencer-button">Influencer</button>
    //     <button className="button brand-button">Brand</button>
    //   </nav>
    // </div>

        <BrowserRouter className="font-cereal-font">
       <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/login" element={<LoginPage />} />
       </Routes>
     </BrowserRouter>

  );
}

export default App;
