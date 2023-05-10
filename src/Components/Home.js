import React from 'react'
import Pizza from "../Images/pizza1.jpg";

const Home = () => {
  return (
    <div className='home-container'>
      <div className='hometext'>
      <h3>CRAFTED WITH SPIRIT</h3>
      <h1>A TAILORED TASTE OF ITALY</h1>
      <h3>Our love for pizza is exemplified by our dedication to the craft and every bite of our signature hand-tossed, thin crust yeast free dough is a testament of it. From the artisanal mozzarella to all the other Italian staples, our philosophy is to use the best ingredients and do them justice. Our team is driven by passion and fueled by their expertise.</h3>
      </div>
      <img className="pizza1"src={Pizza} />
      <div className='hometext'>
      <h1>JOIN US FOR DELICIOUS THIN CRUST PIZZA</h1>
      <h3>We look forward to sharing moments with you and most importantly, we create memories along the way, so we hope you're ready! See you soon!</h3>
      </div>
    </div>
  )
}

export default Home
