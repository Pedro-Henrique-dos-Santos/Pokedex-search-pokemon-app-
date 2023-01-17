import { getPokemon } from "./data-pokemon";
const getPokemonName = async () => {
  const response = await getPokemon();
  return await response.name;
};

const getPokemonSprite = async () => {
  const response = await getPokemon();
  return await response.sprites.front_default;
};

const getPokemonType = async () => {
  const response = await getPokemon();
  return await response.types;
};

export { getPokemonName, getPokemonType, getPokemonSprite };
