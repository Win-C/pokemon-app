import Pokecard from "./Pokecard";
import "./Pokedex.css";

const BASE_IMAGE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

/** Function renders Pokedex component
 *  
 *  prop:
 *  - an array of objects describing different pokemon
 *    [{id, name, type, base_experience}, ...]
 * 
 *  Pokegame -> Pokedex -> Pokecard
 */
function Pokedex({ pokemon, totalExp, isWinner }){
  const pokemonList = pokemon.map(
    ({name, id, type, base_experience}) =>
      <Pokecard 
        key = {name}
        name = {name}
        image = {BASE_IMAGE_URL+id+'.png'}
        type = {type}
        baseExp = {base_experience}
      />
  );

  return (
    <div className="Pokedex-container">
      <h4 className="Pokedex-totalExp">Total experience: {totalExp}</h4>
      <div className="Pokedex-cards">
        {pokemonList}
      </div>
      {isWinner
        ? <h1 className="Pokedex-winner">You win!</h1>
        : null}
    </div>
  );
}

export default Pokedex;