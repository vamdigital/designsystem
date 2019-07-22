/* Component  : Images is a Functional Component
 * Created on : 22/7/2019 12:15:06 AM
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
  title: 'Images'
};

/* Functional Component Function below */
const Images = ({ title }) => {
  //Define your Methods Here

  //Returns JSX below
  return (
    <>
      <h2 className="section-title">{title}</h2>
    </>
  );
};

Images.propTypes = propTypes; // from Line 11
Images.defaultProps = defaultProps; // from Line 17

export default Images;
