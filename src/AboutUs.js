import React from 'react';
import CFGlogo from './assets/CFGlogo.jpg'; // import the image file
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="AboutUs">
      <img src={CFGlogo} alt="CFG's Finest logo" />
      <h1>~ ABOUT US ~</h1>



      <h2>You Want Great Tasty Food? You've Come To The Right Place ...</h2>

      
 
      <h2>A Place Where the Vibe is Always Right</h2> 

      <h3>Fresh flavours and Appetising Meals That Won't Break The Bank.</h3>



      <h4>At CFG's FINEST dining is a relaxed sociable experience.
        Offering different dining styles to suit the occasion whether it be lunch, 
        relaxed family dinner or a large celebration we have a menu to suit. 
        Serving brunch, lunch, afternoon tea & dinner daily from noon. </h4>
     
      <h4>CFG's FINEST is a restaurant that serves up deliciously cooked meals. 
        We use only the freshest ingredients and our chefs are passionate about creating 
        food that is both flavorful and satisfying.
     
      We offer a wide variety of dishes, including pasta, pizza, seafood, and chicken. 
        We also have a full bar with a variety of drnks including cocktails, beers, and wines.</h4>
     
      <h4>With an endearing blend of old-world charm and new-age vibrance, it's no wonder we 
        knew the fashion and art capital was where we wanted to lay our foundation.</h4>
        

      <h4>Within the speckled architecture and brimming beauty of Manchester city, we have 
        made a nest in the cultural hub of Manchester amidst the galleries and elegant boutiques 
        that line the streets.
      We’re excited to bring you our unique mix of Everyone's Favourite Foods 
        with contemporary execution, whether it be on the table or the bar we build the experience around you!</h4>


      <h2>We hope to see You soon!</h2>
      
    </div>
  );
}

export default AboutUs;