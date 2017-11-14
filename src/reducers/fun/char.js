import characters from '../data/characters.json'  //DATA

/*
ACTIONS
export const addCharById = (id) => ({
    type: "ADDCHAR",
    id
})

export const removeChar = (id) => ({
    type: "REMOVECHAR",
    id
})
*/


export const CaracterReducer = (state = characters, action) => {
  switch (action.type) {
    case 'ADDCHAR':
      let char = state.filter(item => item.id !== action.id);
      return char;
    case 'REMOVECHAR':
      char = [...state, createCharactere(action.id)];
      return char;
    default:
      return state;
  }
};

export const heroReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADDCHAR':
      let heroes = [...state, createCharactere(action.id)];
      return heroes;
    case 'REMOVECHAR':
      heroes = state.filter(hero => hero.id !== action.id);
      return heroes;
    default:
      return state;
  }
};

//RETOURNE LUI DU ID
export const createCharactere = (id) => {
  let caracter = characters.find( c => c.id === id)
  return caracter;
}
