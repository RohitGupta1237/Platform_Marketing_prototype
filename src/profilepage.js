import React from 'react';
import './profilepage.css';
import { FaUserTag, FaUsers, FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaSnapchat, FaTiktok, FaMapMarkerAlt, FaEye, FaMoneyBill, FaEnvelope } from 'react-icons/fa';

function ProfilePage({ user }) {
    console.log(user.email)
  return (
    <div className="ProfilePage">
      <div className="ProfilePage-header">
        {/* <div className="ProfilePage-avatar">
          <img src={user.avatar} alt={user.name} />
        </div> */}
        <div className="ProfilePage-userInfo">
          <h1>{user.name}</h1>
          <div className="ProfilePage-subtitle">
            <FaUserTag /> {user.kindOfInfluencer}
          </div>
          <div className="ProfilePage-followers">
            <FaUsers /> {user.noOfFollowers} followers
          </div>
          <div className="ProfilePage-subscribers">
            <FaTwitter /> {user.subscribersTwitter}
            <FaInstagram /> {user.subscribersInstagram}
            <FaFacebook /> {user.subscribersFacebook}
            <FaYoutube /> {user.subscribersYouTube}
            <FaSnapchat /> {user.subscribersSnapchat}
            <FaTiktok /> {user.subscribersTikTok}
          </div>
        </div>
      </div>
      <div className="ProfilePage-details">
        <div className="ProfilePage-details-header">
          <h2>Details</h2>
        </div>
        <div className="ProfilePage-details-body">
          <div className="ProfilePage-detail-item">
            <FaMapMarkerAlt />
            <div className="ProfilePage-detail-text">{user.areaOfActive}</div>
          </div>
          <div className="ProfilePage-detail-item">
            <FaEye />
            <div className="ProfilePage-detail-text">{user.viewsPerPost} views per post</div>
          </div>
          <div className="ProfilePage-detail-item">
            <FaEye />
            <div className="ProfilePage-detail-text">{user.viewsPerVideo} views per video</div>
          </div>
          <div className="ProfilePage-detail-item">
            <FaEye />
            <div className="ProfilePage-detail-text">{user.viewsPerReel} views per reel</div>
          </div>
          <div className="ProfilePage-detail-item">
            <FaEye />
            <div className="ProfilePage-detail-text">{user.viewsPerTweet} views per tweet</div>
          </div>
          <div className="ProfilePage-detail-item">
            <FaMoneyBill />
            <div className="ProfilePage-detail-text">{user.priceForPromotion} per promotion</div>
          </div>
          <div className="ProfilePage-detail-item">
            <FaEnvelope />
            <div className="ProfilePage-detail-text">{user.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
// egnskrjgnkn
export default ProfilePage;
