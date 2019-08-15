import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentUserForm from '../components/currentUserForm'

class Home extends Component {
  render() {

    const { cookies } = this.props;

    const userName = cookies.get('name')
    // debugger
    return (
      <div>
        <h6>Current User Name in Cookies: {userName}</h6>
        <CurrentUserForm cookies={cookies}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    state: state,
    cookies: ownProps.cookies
  })
}
export default connect(mapStateToProps)(Home)
