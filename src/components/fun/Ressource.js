import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Ressource  extends Component {
  render() {
    return (
      <div>
      <nav className='navbar navbar-light'>
        <ul className='nav navbar-nav'>
          <li className='nav-item'><Link to="/">home</Link></li>
        </ul>
      </nav>
      {this.props.login ? <h4>Recette secrete</h4>  : <p>Vous devez vous loguer</p>}

      {this.props.login && <p>Vous Etes logué</p>}

    </div>
    );
  }
}


const mapStateToProps = (state) => ({
    login: state.login
});

const mapDispatchToProps = (dispatch, props) => ({

    startLogin: (bool) => dispatch(logIn(bool))

});

export default connect(mapStateToProps, mapDispatchToProps)(Ressource);
