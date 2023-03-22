import React from 'react';
import './influencer.css';
import { useNavigate } from "react-router-dom";


function LoginPage() {
    const navigate = useNavigate();

    const onClick = () => {
      navigate("/register");
    };
  
    const newClick=()=>{
        navigate("/influencerlogin")
    }
  return (
    <div className="LoginPage">
      <h1>Welcome!</h1>
      <div className="buttons">
        <button className="button new-user-button" onClick={onClick} >New User</button>
        <button className="button already-user-button" onClick={newClick}>Alreadry User</button>
      </div>
    </div>
  );
}
// rgerhergerg
export default LoginPage;
