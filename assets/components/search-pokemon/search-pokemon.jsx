import { useEffect, useLayoutEffect, useState, useRef } from "react";
import {
  getPokemonName,
  getPokemonType,
  getPokemonSprite,
} from "../../services/features";
import { H1, Div, Ul, Li, Button, Input } from "./styled";

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

  //Input

  const inputRef = useRef();

  const searched = async () => {
    try {
      const searchValue = inputRef.current.value;
      const dataName = await getPokemonName(searchValue);
      const dataSpriteFront = await getPokemonSprite(searchValue);
      let dataType = await getPokemonType(searchValue);
      
      if (searchValue === "") {
        alert("O campo foi detectado como vázio. Escreva alguma coisa!😡😠");
        return;
      }
      setPokemon({
        name: dataName,
        sprite: dataSpriteFront,
        type: dataType,
      });
    } catch (error) {
      alert("O pokemon não foi encontrado 😱😰");
      console.log(error);
    }
  };

  const { name, sprite, type } = pokemon;

  return (
    <Div>
      <div>
        <Input ref={inputRef} type="text" />
        <Button
          onClick={() => {
            searched();
          }}
        >
          buscar
        </Button>
      </div>

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
