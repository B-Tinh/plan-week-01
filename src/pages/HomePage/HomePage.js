import React, { Component } from 'react';
import { connect } from "react-redux";

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>HomePage</h1>
            </div>
        );
    }
}

  
  export default connect()(HomePage);