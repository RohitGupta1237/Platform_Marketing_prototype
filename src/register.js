import React from 'react';
import './register.css';
import { useState , useHistory } from 'react';
// import { useHistory } from 'react-router-dom';


const RegistrationForm=()=> {

  const [name, setName] = useState('');
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [kindOfInfluencer,setkindOfInfluencer] = useState('');
  const [followers, setfollowers] = useState('');
  const [subscribersTwitter, setsubscribersTwitter] = useState('');
  const [subscribersInstagram, setsubscribersInstagram] = useState('');
  const [subscribersFacebook, setsubscribersFacebook] = useState('');
  const [subscribersYouTube, setsubscribersYouTube] = useState('');
  const [subscribersSnapchat, setsubscribersSnapchat] = useState('');
  const [subscribersTikTok, setsubscribersTikTok] = useState('');
  const [areaOfActive, setareaOfActive] = useState('');
  const [viewsPerPost, setviewsPerPost] = useState('');
  const [viewsPerVideo, setviewsPerVideo] = useState('');
  const [viewsPerReel, setviewsPerReel] = useState('');
  const [viewsPerTweet, setviewsPerTweet] = useState('');
  const [priceForPromotion, setpriceForPromotion] = useState('');
  
  const history = useHistory();

  const handlePaymentCallback = (paymentStatus) => {
    if (paymentStatus === 'success') {
      // If payment is successful, save theyup  user data to the database
      fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, username, password ,kindOfInfluencer,followers ,subscribersTwitter
             , subscribersInstagram, subscribersFacebook , subscribersYouTube, subscribersSnapchat, 
             subscribersTikTok , areaOfActive , viewsPerPost ,viewsPerVideo , viewsPerReel, viewsPerTweet , priceForPromotion})
      })
        .then(response => response.text())
        .then(() => {
          // Redirect the user to a thank-you page
          history.push('/thank-you');
        })
        .catch(error => console.error(error));
    } else {
      // If payment is not successful, show an error message
      alert('Payment failed');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const paymentGatewayUrl = 'https://www.example.com/payment-gateway';
    // Redirect the user to the payment gateway URL
    window.location.href = paymentGatewayUrl;

    // Listen for the payment status callback from the payment gateway
    window.addEventListener('paymentStatus', (event) => {
      const paymentStatus = event.detail.status;
      handlePaymentCallback(paymentStatus);
    });
  };


  return (
    <div className="RegistrationForm">
      <h1>Create an account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">

          <label htmlFor="name">Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />

          {/* <input type="text" id="name" name="name" /> */}

        </div>
        <div className="form-group">

          <label htmlFor="kindOfInfluencer">Kind of Influencer:</label>
          <input type="text" value={kindOfInfluencer} onChange={e => setkindOfInfluencer(e.target.value)} />

          {/* <input type="text" id="kindOfInfluencer" name="kindOfInfluencer" /> */}
        </div>
        <div className="form-group">
          <label htmlFor="followers">No of Followers:</label>
          
          <input type="text" value={followers} onChange={e => setfollowers(e.target.value)} />

          {/* <input type="text" id="followers" name="followers" /> */}
        </div>
        <div className="form-group">
          <label htmlFor="subscribersTwitter">Subscribers on Twitter:</label>
          <input type="text" value={subscribersTwitter} onChange={e => setsubscribersTwitter(e.target.value)} />

          {/* <input type="text" id="subscribersTwitter" name="subscribersTwitter" /> */}
        </div>
        <div className="form-group">
          <label htmlFor="subscribersInstagram">Subscribers on Instagram:</label>
          <input type="text" value={subscribersInstagram} onChange={e => setsubscribersInstagram(e.target.value)} />

          {/* <input type="text" id="subscribersInstagram" name="subscribersInstagram" /> */}
        </div>
        <div className="form-group">
          <label htmlFor="subscribersFacebook">Subscribers on Facebook:</label>
          <input type="text" value={subscribersFacebook} onChange={e => setsubscribersFacebook(e.target.value)} />

          {/* <input type="text" id="subscribersFacebook" name="subscribersFacebook" /> */}
        </div>
        <div className="form-group">
          <label htmlFor="subscribersYouTube">Subscribers on YouTube:</label>
          <input type="text" value={subscribersYouTube} onChange={e => setsubscribersYouTube(e.target.value)} />

          {/* <input type="text" id="subscribersYouTube" name="subscribersYouTube" /> */}
        </div>
        <div className="form-group">
          <label htmlFor="subscribersSnapchat">Subscribers on Snapchat:</label>
          <input type="text" value={subscribersSnapchat} onChange={e => setsubscribersSnapchat(e.target.value)} />

          {/* <input type="text" id="subscribersSnapchat" name="subscribersSnapchat" /> */}
        </div>
        <div className="form-group">
          <label htmlFor="subscribersTikTok">Subscribers on TikTok:</label>
          <input type="text" value={subscribersTikTok} onChange={e => setsubscribersTikTok(e.target.value)} />

          {/* <input type="text" id="subscribersTikTok" name="subscribersTikTok" /> */}
        </div>
        <div className="form-group">
          <label htmlFor="areaOfActive">Area of Active:</label>
          <input type="text" value={areaOfActive} onChange={e => setareaOfActive(e.target.value)} />

          {/* <input type="text" id="areaOfActive" name="areaOfActive" /> */}
        </div>
        <div className="form-group">
          <label htmlFor="viewsPerPost">Views per Post:</label>
          <input type="text" value={viewsPerPost} onChange={e => setviewsPerPost(e.target.value)} />

          {/* <input type="text" id="viewsPerPost" name="viewsPerPost" /> */}
        </div>
        <div className="form-group">
          <label htmlFor="viewsPerVideo">Views per Video:</label>
          <input type="text" value={viewsPerVideo} onChange={e =>setviewsPerVideo(e.target.value)} />

          {/* <input type="text" id="viewsPerVideo" name="viewsPerVideo" /> */}
        </div>
        <div className="form-group">
          <label htmlFor="viewsPerReel">Views per Reel:</label>
          <input type="text" value={viewsPerReel} onChange={e => setviewsPerReel(e.target.value)} />

          {/* <input type="text" id="viewsPerReel" name="viewsPerReel" /> */}
        </div>
        <div className="form-group">
          <label htmlFor="viewsPerTweet">Views per Tweet:</label>
          <input type="text" value={viewsPerTweet} onChange={e => setviewsPerTweet(e.target.value)} />

          {/* <input type="text" id="viewsPerTweet" name="viewsPerTweet" /> */}
        </div>
        <div className="form-group">
      <label htmlFor="priceForPromotion">Price for Promotion:</label>
      <input type="text" value={priceForPromotion} onChange={e => setpriceForPromotion(e.target.value)} />

      {/* <input type="text" id="priceForPromotion" name="priceForPromotion" /> */}
    </div>
    <div className="form-group">
      <label htmlFor="username">Username:</label>
      <input type="username" value={username} onChange={e => setusername(e.target.value)} />

      {/* <input type="text" id="username" name="username" /> */}
    </div>
    <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

      {/* <input type="password" id="password" name="password" /> */}
    </div>
    <button type="submit">Register</button>
  </form>
</div>
);
}

export default RegistrationForm;