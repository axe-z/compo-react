
/*
///pour promises fetch
export default function ({dispatch}) {
 return next => action => {
  //si y a pas de payload, ou de promisse sur le payload
   if(!action.payload || !action.payload.then) {
       return next(action) ;
   }
   action.payload
   .then(response => {
     //parceque les payload est TJRS un obj, on va le prendre ainsi

  response.json().then(data =>   {
      const nouvelleAction = {...action, payload: data }
         dispatch(nouvelleAction)
  });

     //fetch {...action, payload: response.json() }
   //on veut pas faire next, on veut que l action refasse le chemin d une action normale dobj.
   })
 };
}
*/


export default function({ dispatch }) {
  return next => action => {
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    action.payload.then(response => {
      response.json().then(data => {
        const nouvelleAction = { ...action, payload: data };
        dispatch(nouvelleAction);
      });
    });
  };
}
