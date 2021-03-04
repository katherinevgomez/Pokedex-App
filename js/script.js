//A variable is created with the 'poke_container' id
const poke_container = document.getElementById('poke_container');
const pokemons_number = 151;

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
//the pokemon class, below indicates what's contained within the 
//pokemon class

const createPokemonCard = (pokemon) => {
   const pokemonEl = document.createElement('div');
   pokemonEl.classList.add('pokemon');
   const {id, name, height, weight, sprites, types} = pokemon;
   const type = types[0].type.name;

   // The pokeInnerHTML is made to call the pokemon stats we 
   //just set to the pokemon variable and tell it how to display 
   //on the website 
   const pokeInnerHTML = `<div class = "img-container">
   <img src="${sprites.front_default}" alt="${name}"/></div>
   <div class = "stats">
      <span class = "number">${id}</span>
      <h3 class = "name">${name}</h3>
      <small class = "height">${height}</small>
      <small class = "weight">${weight}</small>
      <small class = "type">Type:
      <span>${type}</span></small>
      </div>
      `;
   pokemonEl.innerHTML = pokeInnerHTML;
   poke_container.appendChild(pokemonEl);
}

fetchPokemons();

