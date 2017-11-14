
// const usersFetch = () => {
//   return fetch('https://jsonplaceholder.typicode.com/users')
//      .then((res) => {
//       return res.json() //transforme et retourne le data
//     }).catch((e) => {
//       console.log(e)
//     });
// }
//
// //LE THUNK , QUI DISPATCH ENSUITE NOTRE MEMEACTION
// export const usersAction = () => {
//   return (dispatch) => {
//     return usersFetch()
//     .then(data  => {
//     //   console.log(data ) //un array de json recu
//     return  dispatch(usersAdd(data))
//     })
//   }
// }
//
//
//  export const usersAdd = (users) => {
//  return {
//   type: "FETCH_USER",
//   payload: users
//   }
// }



export const usersAdd = ( ) => {
  const request = fetch('https://jsonplaceholder.typicode.com/users');
return {
 type: "FETCH_USER",
 payload: request
 }
}
