import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component {
  render() {

    const { cookies } = this.props;

    const userName = cookies.get('name')
    // debugger
    return (
      <div>
        <h3>Home Page for Cookies Testing</h3>
        <p>Current User: {userName}</p>
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
