

let UserReducer = (state = [], action) => {

   switch (action.type) {
    case 'FETCH_USER':
    //console.log(action.payload)
    return  [...state, ...action.payload  ]
    default:
     return state;
   }
 };


export default UserReducer
