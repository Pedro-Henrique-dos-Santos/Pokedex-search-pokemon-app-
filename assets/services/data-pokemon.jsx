import { url } from "../variables";
import axios from "axios";

const getPokemon = async (pokename = "charizard") => {
  const response = await axios.get(url + pokename);
  return response.data;
};

export { getPokemon };
