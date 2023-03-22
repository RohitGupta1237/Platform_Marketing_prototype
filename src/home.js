import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
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
        <button className="button influencer-button" onClick={onClick}>
          Influencer
        </button>
        <button className="button brand-button" onClick={onClick2}>Brand</button>
      </nav>
    </div>
  );
}

export default Home;
