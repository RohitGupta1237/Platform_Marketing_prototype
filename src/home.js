import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/login");
  };

  return (
    <div className="App">
      <nav>
        <button className="button influencer-button" onClick={onClick}>
          Influencer
        </button>
        <button className="button brand-button">Brand</button>
      </nav>
    </div>
  );
}

export default Home;
