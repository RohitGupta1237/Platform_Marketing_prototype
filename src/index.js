import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './influencer';
import LoginPage1 from './loginpage';
// import RegistratsegsrgionForm from './register';
// import ProfilePage from './profilepage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <LoginPage/>
    <LoginPage1/>
    {/* <RegistrationForm/>
    <ProfilePage /> */}
  </React.StrictMode>
);

reportWebVitals();
