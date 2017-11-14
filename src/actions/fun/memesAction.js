
const username = 'axe-z';
const password = '012345678'

export const memesAction = (meme) =>  {
  //const { meme } = json.data;
  return {
    type: 'ADD_MEMES',
    meme
  }
};


///retourne une promesse qui se chaine en then
const fetchMemesJson = () => {
  return fetch(`https://api.imgflip.com/get_memes`)
     .then((res) => {
      return res.json()
    }).catch((e) => {
      console.log(e)
    });
}

//le thunk , qui dispatch ensuite notre memeAction
export const fetchMemes = () => {
  return (dispatch) => {
    return fetchMemesJson()
    .then( data  => {
       console.log(data.data.memes)
    return   dispatch(memesAction(data.data.memes))

    })
  }
}
