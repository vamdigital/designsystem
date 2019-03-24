/* Component  : NotFound is a Functional Component
 * Created on : 23/3/2019 19:11:50
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
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
  title: 'Page Not Found - 404'
};

/* Functional Component Function below */
const NotFound = props => {
  //Define your Methods Here

  //Returns JSX below
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>{props.title}</h1>
        </div>
      </div>
    </div>

  );
};

NotFound.propTypes = propTypes; // from Line 11
NotFound.defaultProps = defaultProps; // from Line 17

export default NotFound;
