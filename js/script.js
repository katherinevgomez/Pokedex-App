//A variable is created with the 'poke_container' id
const poke_container = document.getElementById('poke_container');
const pokemons_number = 151;
const colors = {
   fire:'orange',
   grass:'lightgreen',
   electric:'yellow',
   water:'lightblue',
   ground:'brown',
   rock:'gray',
   fairy:'pink',
   poison:'darkviolet',
   bug:'teal',
   dragon:'red',
   psychic:'darkpurple',
   fighting:'darkgray',
   normal:'lightbrown',
   ice:'blue',
   ghost:'lightpurple'
};

//The 'Object.keys' method returns an array of the given object's 
//property names, in this case the colors

const main_types = Object.keys(colors);

//With the 'fetchPokemons' function you use a for loop to cycle 
//through the pokemons until we reach the number declared in 
//the previous 'pokemons_number' variable

const fetchPokemons = async () => {
   for (let i = 1; i <= pokemons_number; i++) {
      await getPokemon(i);
   }
};

//The Async function allows for asycnchronous, 
//promise-based behaviors instead of having to create 
//synchronous (.then) promise chains to call the API

const getPokemon = async id => {
   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
   const res = await fetch(url);
   const pokemon = await res.json();
   createPokemonCard(pokemon);
}

//With the createPokemonCard function, a new div is created with 
//the pokemon class

const createPokemonCard = (pokemon) => {
   const pokemonEl = document.createElement('div');
   pokemonEl.classList.add('pokemon');
   const {id, name, height, weight, sprites, types} = pokemon;
   const type = types[0].type.name;
   const poke_types = pokemon.types.map(el => el.type.name);

   //The function 'poke_type' uses the find method to search and retrieve
   //the pokemon type data
   const poke_type = main_types.find(poke_type => poke_types.indexOf(poke_type) > -1);
   
   //Assigns color to poke_types and displays matching background color
   const color = colors[type];
   pokemonEl.style.backgroundColor = color;

   // The pokeInnerHTML is made to call the pokemon stats we 
   //just set to the pokemon variable and tell it how to display 
   //on the website starting by the pokemon image
   const pokeInnerHTML = `<div class = "img-container">
   <img src="${sprites.front_default}" alt="${name}"/></div>
   <div class = "stats">
      <span class = "number">#${id}</span>
      <h3 class = "name">${name}</h3>
      <small class = "height">Height:${height}</small>
      <small class = "weight">Weight:${weight}</small>
      <small class = "type">Type:
      <span>${type}</span></small>
      </div>
      `;
   pokemonEl.innerHTML = pokeInnerHTML;
   poke_container.appendChild(pokemonEl);
}

fetchPokemons();

