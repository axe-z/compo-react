import React, {Component} from "react";
import { connect } from 'react-redux';
import { addCharById , removeChar } from '../actions/charAction.js';

class CharactereList extends Component {
  force = () => {
    return this.props.heroes.reduce((a,b) => {return a + b.strength }, 0);
  }
  intelligence = () => {
    return this.props.heroes.reduce((a,b) => {return a + b.intelligence }, 0);
  }
  speed = () => {
    return this.props.heroes.reduce((a,b) => {return a + b.speed }, 0);
  }
  render() {
    return (
      <div>
        <h4>les choix</h4>
       <ul>
         {this.props.caracters.map(item => <li key={item.id}
              onClick={ () => this.props.addCharById( item.id )}> {item.name} +
         </li>)}
       </ul>
    
       <h4>vos choix</h4>
       <ul>
         {this.props.heroes.map(h => <li key={h.id}
             onClick={ () => this.props.removeChar( h.id )}>  {h.name} -
         </li>)}
       </ul>
       <h4>Stats</h4>
       <ul>
         <li>{this.force()} de force</li>
         <li>{this.intelligence()} d'intelligence</li>
         <li> {this.speed()} de vitesse</li>
       </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    caracters: state.car,
    heroes: state.hero
});

const mapDispatchToProps = (dispatch, props) => {
 return {
 addCharById: (id) => dispatch(addCharById(id)),
 removeChar: (id) => dispatch(removeChar(id))
 }
};

export default connect(mapStateToProps,mapDispatchToProps)(CharactereList);
// export default connect(mapStateToProps,{ addCharById, removeChar })(CharactereList);
