import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'


class User extends Component {
  
  componentWillMount() {
  }
  
  render () {
    return (
      <div>
        User{this.props.match.params.id}
      </div>
    )
  }
}

export default withRouter(User)