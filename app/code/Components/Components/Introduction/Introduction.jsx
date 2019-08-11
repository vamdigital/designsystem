/* Component  : Introduction is a Functional Component
 * Created on : 11/8/2019 8:34:46 PM
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
  title: 'Introduction'
};

/* Functional Component Function below */
const Introduction = props => {
  const { title } = props;
  //Define your Methods Here

  //Returns JSX below
  return (
    <>
      <h2 className="section-title">{title}</h2>
      <p>
        Components are reusable parts of the user interface that have been made
        to support a variety of applications.
      </p>
      <p>
        Individual components can be used in multiple different patterns and
        contexts. For example, the text input component can be used to ask for
        an email address or someone’s name.
      </p>
    </>
  );
};

Introduction.propTypes = propTypes; // from Line 11
Introduction.defaultProps = defaultProps; // from Line 17

export default Introduction;
