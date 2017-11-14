import React, { Component } from 'react';
 import { connect } from 'react-redux';





export default WrappedComponent => {
  class Authentification extends Component {

    render() {
     console.log('on roule ce wrap', WrappedComponent);

      return <WrappedComponent {...this.props} test={33} />
    }
  }
  const mapStateToProps = state => ({
    login: state.login
  });
  return connect(mapStateToProps, null)(Authentification);
};
