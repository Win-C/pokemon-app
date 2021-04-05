import Pokedex from "./Pokedex";
import "./Pokegame.css";

/** Function renders Pokegame component
 * 
 *  App -> Pokegame -> Pokedex
 */
function Pokegame({pokemon}){
  const hand1 = [];
  const hand2 = [...pokemon];

  while (hand1.length < hand2.length){
    const randomNum = Math.floor(Math.random() * hand2.length);
    hand1.push(hand2[randomNum]);
    hand2.splice(randomNum, 1);
  }

  const trainer1TotalExp = calcTotalExp(hand1);
  const trainer2TotalExp = calcTotalExp(hand2);

  return (
    <div className="Pokegame-container">
      <h1>Pokemon Battle</h1>
      <h2>Trainer One</h2>
      <Pokedex 
        pokemon={hand1} 
        totalExp={trainer1TotalExp} 
        isWinner={trainer1TotalExp > trainer2TotalExp}/>
      <h2>Trainer Two</h2>
      <Pokedex 
        pokemon={hand2} 
        totalExp={trainer2TotalExp} 
        isWinner={trainer1TotalExp < trainer2TotalExp}/>
    </div>
  );
}

/** Helper function to calculate total base experience for a hand */
function calcTotalExp(hand){
  return hand.reduce((totalExp, obj) => {
    return totalExp + obj.base_experience;
  }, 0);
}

Pokegame.defaultProps = {
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

export default Pokegame;