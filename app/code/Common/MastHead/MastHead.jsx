/* Component  : MastHead is a Functional Component
 * Created on : 17/3/2019 16:42:19
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from './MastHead.scss';

/* Type Checking for PropTypes */
const propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string,
  title: PropTypes.string,
  linkText: PropTypes.string
};

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
  title: 'Main Page Heading',
  linkText: "Let's get started"
};

/* Functional Component Function below */
const MastHead = props => {
  //Define your Methods Here

  //Returns JSX below
  return (
    <React.Fragment>
      <div className={[Styles['app-masthead']].join(' ')}>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1 className={[Styles['app-masthead--title']].join(' ')}>
                {props.title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

MastHead.propTypes = propTypes;
MastHead.defaultProps = defaultProps;

export default MastHead;
