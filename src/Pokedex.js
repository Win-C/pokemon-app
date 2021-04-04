import Pokecard from "./Pokecard";
import "./Pokedex.css";

const BASE_IMAGE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

/** Function renders Pokedex component
 *  
 *  prop:
 *  - an array of objects describing different pokemon
 *    [{id, name, type, base_experience}, ...]
 * 
 *  App -> Pokedex -> Pokecard
 */
function Pokedex({ pokemon }){
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
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex-cards">
        {pokemonList}
      </div>
    </div>
  );
}

Pokedex.defaultProps = {
  pokemon:
  [
    {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
    {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
    {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
    {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
    {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
    {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
    {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
    {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
  ]
};

export default Pokedex;