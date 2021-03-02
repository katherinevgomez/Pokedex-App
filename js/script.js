// DOM Objects

const pokemonName = document.querySelector('.poke-name');
const pokemonId = document.querySelector('.poke-id');
const pokemonWeight = document.querySelector('.poke-weight');
const pokemonHeight = document.querySelector('.poke-height')
const pokemonTypeOne = document.querySelector('.poke-type-one');
const pokemonSprite = document.querySelector('.poke-front-image');

//fetching the Poke API
fetch('https://pokeapi.co/api/v2/pokemon/7')
.then(res => res.json())
.then(data =>{
   console.log(data);


//calling the data stats parameters
   pokemonName.textContent = data['name'];
   pokemonId.textContent = data['id'];
   pokemonWeight.textContent = data['weight'];
   pokemonHeight.textContent = data['height']
   
   const dataTypes = data['types'];
   const dataFirstType = dataTypes[0];
   pokemonTypeOne.textContent = dataFirstType['type']['name'];
  

   pokemonSprite.src = data['sprites']['front_default'] || '';

});
   



