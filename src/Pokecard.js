import "./Pokecard.css";

/** Function renders Pokecard component, showing a single
 *  Pokemon, with their name, image, and type
 * 
 *  Pokedex -> Pokecard
 */
function Pokecard({ name, image, type, baseExp}){
  return (
    <div className="Pokecard-container">
      <h3 className="Pokecard-name">{name}</h3>
      <img className="Pokecard-img" src={image} alt={name} />
      <p className="Pokecard-description">Type: {type}</p>
      <p className="Pokecard-description">EXP: {baseExp}</p>
    </div>
  );
}

export default Pokecard;