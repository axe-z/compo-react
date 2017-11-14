

 export let memesReducer = (state =  [], action) => {
   switch (action.type) {
    case 'ADD_MEMES' :
     return [...state, ...action.meme]
    default:
     return state;
   }
 };
