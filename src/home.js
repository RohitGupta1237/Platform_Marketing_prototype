import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Lottie from 'lottie-react';
import firstgif from './firstgif.json'
import influencergif2 from './influencergif2.json'
import influencer3 from './influencer3.json'

function Home() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/login");
  };

  const onClick2 = () => {
    navigate("/selectservice");
  };
  return (
    <div className="App">
      <nav>
      <Lottie animationData={firstgif}/>
        <button className="button influencer-button" onClick={onClick}>
          Influencer
        </button>
        <Lottie animationData={influencer3}/>

        <button className="button brand-button" onClick={onClick2}>Brand</button>
        <Lottie animationData={influencergif2}/>

      </nav>
    </div>
  );
}

export default Home;
