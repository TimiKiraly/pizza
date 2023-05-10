import React from 'react';
import Footer from "./Footer"
import '../App.css';
import SubHead from './SubHead';
import './Projectlogo.jpg';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div ClassName="title">
          <h1 id="menu">Main Menu</h1>
          {/*<img id="chef" src="https://media.istockphoto.com/id/1446478827/photo/a-chef-is-cooking-in-his-restaurants-kitchen.jpg?b=1&s=170667a&w=0&k=20&c=CPnBJAsLv6e8ZE1DP_z0zP1uRk2adI-aeQQuPSsK8QU=" alt="chefs"/>*/}
          
          
          </div>
     </header>
     <div>
      <div className="starters">
        

      <SubHead message="Starters"/>
      <p>
      <img src="https://cdn.pixabay.com/photo/2017/10/11/23/57/food-2842990__340.jpg" alt="calamari"/>
        <article className="item">
          <p className="flavour">Garlic bread</p>
          <p className="desc">Classic garlic bread</p>
          <p ClassName="price">£6.50</p>
        </article>

        <article className="item">
          <p className="flavour">Brushetta</p>
          <p className="desc">King prawns, chilli & lemon on toasted ciabatta</p>
          <p ClassName="price">£12.50</p>
        </article>

        <article className="item">
          <p className="flavour">Calamari Fritti</p>
          <p className="desc">Crispy fried squid, courgette, red pepper &
garlic mayonnaise</p>
          <p ClassName="price">£10.25</p>
        </article>
        
        </p>
        </div>
      
        <SubHead message="Mains"/>
      <h3>Pizza</h3>
      <div className="mains">
      <img src="https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_960_720.jpg" alt="pizza"/>
      <p>
        <article className="item">
          <p className="flavour">Margherita</p>
          <p className="desc">Mozzarella, tomato and fresh basil</p>
          <p ClassName="price">£13.50</p>
        </article>

        <article className="item">
          <p className="flavour">Diavola</p>
          <p className="desc">Spianata Calabrese spicy salami, nduja, burrata
cream, mozzarella, red chilli, flat leaf parsley</p>
          <p ClassName="price">£15.50</p>
        </article>

        <article className="item">
          <p className="flavour">Fiorentina</p>
          <p className="desc">Spinach, free range egg, tomato, mozzarella
& matured Italian cheese</p>
          <p ClassName="price">£15.50</p>
        </article>   
        
      </p>
      </div>

      <h3>Pasta</h3>
      <div className="mains"><p>
        <img src="https://cdn.pixabay.com/photo/2020/04/28/16/02/pasta-5105223__340.jpg" alt="Tagliatelle Bolognese"/>
        <article className="item">
          <p className="flavour">Lasagne</p>
          <p className="desc">Slow cooked beef ragù, béchamel,
tomato, matured Italian cheese &
fresh basil</p>
          <p ClassName="price">£16.00</p>
        </article>

        <article className="item">
          <p className="flavour">Tagliatte alla Bolognese</p>
          <p className="desc">Slow cooked beef ragù, tomato &
fresh basil</p>
          <p ClassName="price">£16.00</p>
        </article>

        <article className="item">
          <p className="flavour">Spaghetti Carbonara</p>
          <p className="desc">Free range egg, guanciale, matured
Italian cheese, cream &
flat leaf parsley</p>
          <p ClassName="price">£16.00</p>
        </article>
        
        </p>
        </div>
         
    <div className="desserts">
        <SubHead message="Desserts"/> 
       <p>
       <img src="https://cdn.pixabay.com/photo/2017/05/29/18/52/panna-cotta-2354539__340.jpg" alt="pannaCotta"/>
        <article className="item">
          <p className="flavour">Panna Cotta</p>
          <p className="desc">Vanilla cream, summer berries, fresh mint
& amaretti biscuit</p>
          <p ClassName="price">£8.75</p>
        </article>
        

        <article className="item">
          <p className="flavour">Affogato</p>
          <p className="desc">Amaretto, espresso coffee &
vanilla ice cream</p>
          <p ClassName="price">£7.50</p>
        </article>

        <article className="item">
          <p className="flavour">Torta alla Nutella</p>
          <p className="desc">Chocolate & hazelnut cheesecake, sour cherry,
candied hazelnuts</p>
          <p ClassName="price">£8.75</p>
        </article>
        

        </p> 
        </div>
        </div>
        <hr></hr>
        <div className="footer">
        <p>Please contact us to discuss dietary requirements prior to your visit</p>
        <button className="book">BOOK NOW</button>
        </div>
        <Footer />
     </div>
    


  

  
  );
}

export default App;