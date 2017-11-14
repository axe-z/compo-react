import React, { Component, PropTypes } from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import {repasAction, repasPrefereAction } from '../actions/repasAction';

class SearchRecipes extends Component {
  state = {
    disabled: true,
    ingredients: 'Garlic, butter',
    repas: 'pasta'
  };

  search = () => {
    const { ingredients, repas } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${repas}`;
    //console.log(this.state);
    fetch(url, {
      method: 'GET'
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data.results)
        this.props.repasAction(data.results);
      });
  };

  render() {
    return (
      <div>
        <h1>Recettes</h1>
        <Form inline>
          <FormGroup>
            <ControlLabel>Ingrdients</ControlLabel>{' '}
            <FormControl
              type="text"
              placeholder="ail, poulet"
              value={this.state.ingredients}
              onChange={e => {
                const ing = e.target.value;
                this.setState(() => ({ ingredients: ing, disabled: false }));
              }}
            />
          </FormGroup>{' '}
          <FormGroup>
            <ControlLabel>Recette</ControlLabel>{' '}
            <FormControl
              type="text"
              placeholder="roties"
              value={this.state.repas}
              onChange={e => {
                const rep = e.target.value;
                this.setState(() => ({ repas: rep, disabled: false }));
              }}
            />
          </FormGroup>{' '}
          <Button disabled={this.state.disabled} onClick={() => this.search()}>
            Submit
          </Button>
        </Form>
        <div>
          {this.props.repas.map(r => (
            <div key={r.title}>
              <div onClick={() => this.props.repasPrefereAction(r)}>
                &#9734;
              </div>
              <a href={r.href}>
                <h4>{r.title}</h4>
              </a>
              <p>{r.ingredients}</p>
              <img src={r.thumbnail} alt={r.title} />
           </div>
          ))}
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({repas, prefere}) => {
  return {
    repas,
    prefere
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    repasAction: (items) => dispatch(repasAction(items)),
    repasPrefereAction: (item) => dispatch(repasPrefereAction(item))
  }
};


  export default connect(mapStateToProps, mapDispatchToProps)(SearchRecipes);
 //export default connect(mapStateToProps, {repasAction, repasPrefereAction })(SearchRecipes);
