import { useEffect, useState } from "react";
import {getPokemonName, getPokemonType, getPokemonSprite} from '../../services/features'
import { SearchInput } from "../search-input/search-input";
import { H1,Div,Ul,Li } from "./styled";
const SearchPokemon = () => {
  const [pokemon, setPokemon] = useState({
    name: "",
    sprite: "",
    type: [],
  });
  useEffect(() => {
    const axiosData = async () => {
      const dataName = await getPokemonName();
      const dataSpriteFront = await getPokemonSprite();
      let dataType = await getPokemonType();
      setPokemon({
        name: dataName,
        sprite: dataSpriteFront,
        type: dataType,
      });
    };
    axiosData();
  }, []);

  const { name, sprite, type } = pokemon;

  return (
    <Div>
      <SearchInput />
      <div>
        <H1>{name}</H1>
          <img src={sprite} />
          <Ul>
            {type.map((types, index) => {
              return <Li key={index}>{types.type.name}</Li>;
            })}
          </Ul>
      </div>
    </Div>
  );
};

export { SearchPokemon };
