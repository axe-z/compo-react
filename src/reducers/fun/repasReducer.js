

export const repasReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_REPAS':
     //console.log(action.items)
    return [...state, ...action.items]
    //return state.concat(action.items)
    default:
      return state;
  }
};


export const repasPrefereReducer = (state = [], action) => {
  switch (action.type) {
    case 'REPAS_PREFERE':
    //  console.log(action.item)
     return [...state, action.item]
    // return  action.item
    default:
      return state;
  }
};
