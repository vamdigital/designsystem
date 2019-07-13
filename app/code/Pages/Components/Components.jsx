/* Component 	: Components is a Stateful Component
 * Created on	: 23/3/2019 19:08:02
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
  title: 'Components'
};

/* Stateful Component Class Below */
class Components extends Component {
  //Constructor Method below
  constructor(props) {
    super(props);
    this.state = {};
  }

  //Define your Methods Here

  //Render Method returning JSX
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>{this.props.title}</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

//Typechecking with PropTypes
Components.propTypes = propTypes; // from Line 11
Components.defaultProps = defaultProps; // from Line 17

export default Components;
