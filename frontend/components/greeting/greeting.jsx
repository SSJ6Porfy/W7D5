import React from "react";
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let result = (this.props.currentUser) ? (
      <div>
        <h1>Welcome {this.props.currentUser.username}</h1>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    ) : (
      <div>
        <Link to="/#/signup">Sign Up</Link>
        <Link to="/#/login">Log In</Link>
      </div>
    )
    return (
      <div>
        { result }
      </div>
    )
  }
};

export default Greeting;
