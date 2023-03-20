const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    kindOfInfluencer: {type: String, required: true},
    noOfFollowers: {type: Number, default: 0},
    subscribersTwitter: {type: Number, default: 0},
    subscribersInstagram: {type: Number, default: 0},
    subscribersFacebook: {type: Number, default: 0},
    subscribersYouTube: {type: Number, default: 0},
    subscribersSnapchat: {type: Number, default: 0},
    subscribersTikTok: {type: Number, default: 0},
    areaOfActive: {type: String, required: true},
    viewsPerPost: {type: Number, default: 0},
    viewsPerVideo: {type: Number, default: 0},
    viewsPerReel: {type: Number, default: 0},
    viewsPerTweet: {type: Number, default: 0},
    priceForPromotion: {type: Number, default: 0},
    username: {type: String, required: true},
    password: {type: String, required: true}
    // instagramhandlelink:  {type: String, required: true},
    // twitterhandlelink:{type: String, required: true},
    // youtubecwrfwrghannellink: {type: String, required: true},

  });
  
  // Create a model for the schema
  //const Registration
  module.exports= mongoose.model('users', registrationSchema);
  