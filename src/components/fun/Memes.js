import React, { Component  } from 'react';
import { connect } from 'react-redux';
import {memesAction, fetchMemes} from '../actions/memesAction';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';


class Memes extends Component {
  state = {
    limit: 5,
    disabled: true
  }
  render() {
    return (
      <div>

        MY COMPONENT
        <button onClick={  () => {
          this.props.fetchMemes()
          this.setState(() => ({disabled : false }))
      }  }>MEMES</button>
      <button
        onClick={() => this.setState(() => ({limit: this.state.limit += 5 })) }
         disabled={this.state.disabled}>
         ajout de plus</button>
        <ul>
          {this.props.memes.slice(0, this.state.limit).map(mem => {
            return (
              <h4 key={mem.id}>
                {' '}
                {mem.name}
                <img src={mem.url} alt={mem.name} width={100} />
              </h4>
            );
          })
        }
        </ul>

      </div>
    );
  }
}



const mapStateToProps = (state, props) => ({

    memes: state.memes

});


//0-8

export default connect(mapStateToProps, {memesAction, fetchMemes})(Memes);


//<li key= { m.id } > {m.name} </li>
//<img src={m.url} alt={m.name} width={100} />
