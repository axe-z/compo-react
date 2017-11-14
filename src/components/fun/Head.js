import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../actions/log';


class Head  extends Component {


  authButton = () => {
    //console.log(this.props.login)
     const  { login, startLogin } = this.props;
    return <button className="btn nav-btn"
    onClick={() => startLogin(!login)}>
      { login ? 'SignOut' : 'SignIn'}</button>
  }

  render() {
     //console.log(this.props.login)
    return (
      <nav className='navbar navbar-light'>
        <ul className='nav navbar-nav'>
          <li className='nav-item'><Link to="/">home</Link></li>
          <li className='nav-item'><Link to="/ressource">ressource</Link></li>
          <li className='nav-item'>{this.authButton()}</li>
        </ul>
        {this.props.login && <p>Vous etes logguer</p>}

      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
    login: state.login
});

const mapDispatchToProps = (dispatch, props) => ({

    startLogin: (bool) => dispatch(action.logIn(bool))

});

export default connect(mapStateToProps, mapDispatchToProps)(Head);
