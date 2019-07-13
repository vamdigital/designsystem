/* Component 	: Styles is a Stateful Component
 * Created on	: 23/3/2019 19:04:42
 * Created by	: Vaibhav Shringarpure
 */

/* Import Statement Below */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Type Checking for PropTypes */
const propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string,
  title: PropTypes.string
};

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
  title: 'Styles'
};

/* Stateful Component Class Below */
class Styles extends Component {
  //Constructor Method below
  constructor(props) {
    super(props);
    this.state = {};
  }

  //Define your Methods Here

  //Render Method returning JSX
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>{this.props.title}</h1>
          </div>
        </div>
      </div>
    );
  }
}

//Typechecking with PropTypes
Styles.propTypes = propTypes; // from Line 11
Styles.defaultProps = defaultProps; // from Line 17

export default Styles;
