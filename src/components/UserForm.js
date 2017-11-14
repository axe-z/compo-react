import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersAdd} from '../actions/users.js'



class UserForm extends Component {
  componentWillMount = () => {
      this.props.usersAdd();
  };

  renderUser = user => {
    return (
      <div className="card card-block" key={user.id}>
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.phone}</p>
        <p className="card-text">{user.company.name}</p>
        <p className="card-text">{user.address.city}</p>
        <p className="card-text">{user.address.suite}</p>
        <a className="btn btn-primary">{user.email}</a>
      </div>
    );
  };

  render() {
    const { users } = this.props;
    return <div>{users.slice(0, 8).map(this.renderUser)}</div>;
  }
}



 const mapStateToProps = (state, props) => ({
    users: state.users
 });

///ceci n initialise PAS !!
const mapDispatchToProps = (dispatch, props) => ({
    usersAdd: () =>  dispatch(usersAdd()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
