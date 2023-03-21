const mongoose = require('mongoose');
const express=require('express');
const app =express();
const Registration=require('./schema');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
 var jwtKey='jwt';

const bodyParser = require('body-parser');
var jsonParser=bodyParser.json();
var crypto=require('crypto');
var key='password';
var algo='aes256';
mongoose.connect('hi', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Create a ro444ute to handle the form submission
app.post('/api/register', jsonParser ,(req, res) => {
    var cipher =crypto.createCipheriv(algo,key);
    var encrypted=cipher.update(req.body.password , 'utf-8' , 'hex')+cipher.final('hex');
  // Create a new instance of the Registration model with the submitted data
  const newRegistration = new Registration({
    name: req.body.name,
    kindOfInfluencer: req.body.kindOfInfluencer,
    noOfFollowers: req.body.noOfFollowers,
    subscribersTwitter: req.body.subscribersTwitter,
    subscribersInstagram: req.body.subscribersInstagram,
    subscribersFacebook: req.body.subscribersFacebook,
    subscribersYouTube: req.body.subscribersYouTube,
    subscribersSnapchat: req.body.subscribersSnapchat,
    subscribersTikTok: req.body.subscribersTikTok,
    areaOfActive: req.body.areaOfActive,
    viewsPerPost: req.body.viewsPerPost,
    viewsPerVideo: req.body.viewsPerVideo,
    viewsPerReel: req.body.viewsPerReel,
    viewsPerTweet: req.body.viewsPerTweet,
    priceForPromotion: req.body.priceForPromotion,
    username: req.body.username,
    password: encrypted
    // instagramhandlelink:req.body.instagramhandlelink,
    // youtubechannellink:req.body.youtubechannellink,
    // twitterhandlelink: req.body.twitterhandlelink,


  });

  // Save the new registration to the database
      // *******************************************************************************

        newRegistration.save().then((result)=>
        {
            jwt.sign({result},jwtKey,{expiresIn:'300'},(err,token)=>{
                res.status(201).json({token})
            })
            .catch((err)=>console.warn(err))
        })
            // *******************************************************************************new above

         //   newRegistration.save((err) => {
            //     if (err) {
            //       console.log(err);
            //       res.sendStatus(500);
            //     } else {
            //       res.sendStatus(200);
            //     }
            //   });
});


app.post('/api/login',jsonParser, async (req, res) => 
{
    // *******************************************************************************

    const { username, password } = req.body;
  
    // Check if user exists in the database
    const user = await Registration.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  
    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  
    // Generate and send JWT
    const token = jwt.sign({ userId: user._id }, 'secretKey');
    res.json({ token });
// *******************************************************************************new below

     Registration.findOne({ username }).then((data)=>{
        var decipher=crypto.createDecipheriv(algo,key);
        var decrypted=decipher.update(data.password,'hex','utf-8')+decipher.final('utf-8');
        if(decrypted===req.body.password)
        {

            jwt.sign({data},jwtKey,{expiresIn:'300'},(err,token)=>{
                res.status(200).json({token});
            })
        }


})
});
  

module.exports = app;
