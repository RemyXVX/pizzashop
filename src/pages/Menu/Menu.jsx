import React from 'react';

import Mushroom from './../../assets/images/wildmushroom.png';
import Margherita from './../../assets/images/mag.png';
import Chicken from './../../assets/images/bbqchicken.png';
import Diavolo from './../../assets/images/diavolo.png';
import Mediterranean from './../../assets/images/mediterr.png';
import Supreme from './../../assets/images/supreme.png';

const Menu = () => {
  const pizzas = [
    {
      name: 'Wild Mushroom Delight',
      description: 'A savory blend of wild mushrooms, caramelized onions, and truffle oil, topped with creamy mozzarella cheese.',
      image: {Mushroom},
    },
    {
      name: 'Good Ol\' Margherita',
      description: 'A classic pizza featuring fresh tomatoes, basil leaves, and buffalo mozzarella, drizzled with extra virgin olive oil.',
      image: {Margherita},
    },
    {
      name: 'Tasty BBQ Chicken',
      description: 'Tender grilled chicken, smoky barbecue sauce, red onions, and cilantro, finished with a sprinkle of cheddar cheese.',
      image: {Chicken},
    },
    {
      name: 'Wild & Spicy Diavolo',
      description: 'A fiery combination of spicy pepperoni, jalapenos, red chili flakes, and mozzarella cheese, for the brave pizza lovers.',
      image: {Diavolo},
    },
    {
      name: 'Goodness of the Mediterranean',
      description: 'A delightful mix of kalamata olives, sun-dried tomatoes, feta cheese, and fresh oregano, capturing the essence of the Mediterranean.',
      image: {Mediterranean},
    },
    {
      name: 'Tasty Veggie Supreme',
      description: 'Loaded with an assortment of colorful vegetables including bell peppers, onions, black olives, and mushrooms, all on a bed of tangy tomato sauce.',
      image: {Supreme},
    },
  ];

  return (
    <div className="bg-white w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl py-2">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Pizza Menu</h1>
      <div className="">
        {pizzas.map((pizza, index) => (
          <div key={index} className="mb-2 grid grid-cols-1 sm:grid-cols-2">
            <div className="grid sm:grid-rows-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold sm:row-start-2">{pizza.name}</h2>
              <span className="text-gray-600 text-sm sm:text-base sm:row-start-3">{pizza.description}</span>
            </div>
            <div className="flex justify-center">
              <img src={pizza.image[Object.keys(pizza.image)[0]]} className="rounded-full w-40 sm:w-80" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
    
};

export default Menu;
