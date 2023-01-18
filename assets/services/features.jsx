import { getPokemon } from "./data-pokemon";

const getPokemonName = async (pokemonName = 'charizard') => {
  const response = await getPokemon(pokemonName);
  return await response.name;
};

const getPokemonSprite = async (pokemonName = 'charizard') => {
  const response = await getPokemon(pokemonName);
  return await response.sprites.front_default;
};

const getPokemonType = async (pokemonName = 'charizard') => {
  const response = await getPokemon(pokemonName);
  return await response.types;
};

export { getPokemonName, getPokemonType, getPokemonSprite };
