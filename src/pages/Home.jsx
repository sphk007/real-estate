import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
// import Cookies from "js-cookies"

export class Home extends Component {
  
  render() {
    return (
      <div>
        {/* {Cookies.getItem('token1') && <div>Home welcome</div>}
        {!Cookies.getItem('token1') && <Navigate to="/Signup" replace={true} />} */}
        Home
      </div>
    );
  }
}

export default Home;
