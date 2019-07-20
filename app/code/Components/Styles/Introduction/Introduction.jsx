/* Component  : Introduction is a Functional Component
 * Created on : 20/7/2019 2:52:39 PM
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
const Introduction = ({ title }) => {
  //Define your Methods Here

  //Returns JSX below
  return (
    <>
      <h3 className="section-title">{title}</h3>
      <p>
        Styles section helps you to know the brand guidelines for the project.
        It defines the Brand of the product. When creating components you need
        to follow the brand guidelines to keep consistency across all the
        section. Creating a Brand and following the guidelines establishes a
        sense of belonging for the end-user and they get to relate with your
        product.
      </p>
      <p>
        This section contains all the information that you would need to create
        the product following the set-guidelines. Follow-along the navigation
        and browse through the areas like colors, typography.
      </p>
    </>
  );
};

Introduction.propTypes = propTypes; // from Line 11
Introduction.defaultProps = defaultProps; // from Line 17

export default Introduction;
