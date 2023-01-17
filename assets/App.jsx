import { SearchPokemon } from "./components/search-pokemon/search-pokemon";
import { GlobalStyled } from "./styled";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <GlobalStyled/>
      <SearchPokemon/>
    </React.Fragment>
  );
}

export default App;
