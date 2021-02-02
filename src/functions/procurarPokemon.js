const fetch = require('node-fetch');

module.exports = async function procurarPokemon(key) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${key}`);
  const json = await response.json();

  return json;
};
