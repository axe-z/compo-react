import React, { Component } from 'react';
import ColorBlock from './ColorBlock.js'
import Slider from './Slider.js'
class RGB  extends Component {
  state = {
    r: 105 ,
    g: 225,
    b: 205
}
  render() {
    const { r,g,b } = this.state;
    //Prend la color dispo ici , retourne une fn qui doit avoir la val a slide , qui dans Slider devient la function qui permet
    //de mettre une valeur numerique 
    const update = (color) => (val) => this.setState(() => ({ [color]: val }));

    return (
      <div>RGB
      <ColorBlock r={r} b={b} g={g} />
        <Slider value={r} slide={update('r')}/>
        <Slider value={g} slide={update('g')}/>
        <Slider value={b} slide={update('b')}/>
        <p>Rouge:({r}) - Vert:({g}) - Bleu:({b})</p>
      </div>
    );
  }
}

export default RGB;
