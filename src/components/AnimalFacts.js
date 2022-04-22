import React from 'react';
import { animals } from '../data/animalsData';

const title = '';

const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

const displayFact = (e) => {
  if (animals[e.target.alt].facts) {
    let facts = animals[e.target.alt].facts;
    let fact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fact').innerHTML = fact;
  }
};

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      arial-label={animal}
      role="button"
      onClick={displayFact}
    />,
  );
}

const showBackground = true;

export const AnimalFacts = () => {
  return (
    <div>
      <h1>
        {title === '' ? 'Clique em um animal para um fato divertido' : title}
      </h1>
      {showBackground ? background : false}
      <p id="fact"></p>
      <div className="animals">{images}</div>
    </div>
  );
};
