import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const foods = [
  {
    name: "Ghorme Sabzi",
    ingredients:
      "Herbs (coriander, parsley, fenugreek)Red kidney beans, Meat (usually lamb or beef,Dried lime, Turmeric,Onions, Oil",
    photoName: "photos/ghorme.jpeg",
  },
  {
    name: "Gheyme",
    ingredients:
      "Split yellow peas,Meat (lamb or beef),Tomato paste,Potatoes,Dried lime, Turmeric,Onions,Oil",
    photoName: "photos/gheyme.jpg",
  },
  {
    name: "Karafs",
    ingredients:
      "Celery, Meat (usually lamb or beef),Herbs,Lime juice,Turmeric,Onions,Oil",
    photoName: "photos/karafs.jpg",
  },
  {
    name: "Koobide",
    ingredients:
      "Ground meat(usually lamb or beef), Onions, Egg yolk, Turmeric, Salt and pepper",
    photoName: "photos/koobide.jpg",
  },
  {
    name: "Jooje",
    ingredients: "Chicken,Lime juice ,Saffron, Yogurt, Salt and pepper",
    photoName: "photos/jooje.jpg",
  },
  {
    name: "Barg",
    ingredients:
      "Grilled meat slices (usually lamb or beef), Saffron, Lime juice, Onions,Oil",
    photoName: "photos/barg.jpg",
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>1001 Nights Iranian restaurant</h1>
    </header>
  );
}

function Menu() {
  return (
    <>
      <div className="menu">
        <p>Authentic Iranian food with the best ingredients!</p>
        <h2>Our Menu</h2>
      </div>
      <ul className="foods">
        {foods.map((food) => (
          <Food foodObj={food} key={food.name} />
        ))}
      </ul>
    </>
  );
}

function Food({ foodObj }) {
  return (
    <li className="food">
      <img src={foodObj.photoName} alt={foodObj.name} />
      <div>
        <h3>{foodObj.name}</h3>
        <p>{foodObj.ingredients}</p>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 to {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}! Come visit us or order online!</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
