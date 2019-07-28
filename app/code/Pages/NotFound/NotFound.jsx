/* Component  : NotFound is a Functional Component
 * Created on : 23/3/2019 19:11:50
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import NotFoundImage from '../../../assets/images/notFound.png';

/* Type Checking for PropTypes */
const propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  linkText: PropTypes.string
};

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
  title: "Oops! The page you were looking for doesn't exist.",
  subtitle: 'You may have misstyped the address or the page may have moved.',
  linkText: 'Go to homepage'
};

/* Functional Component Function below */
const NotFound = props => {
  //Define your Methods Here

  //Returns JSX below
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="not-found">
            <div className="col-6 text">
              <h2>{props.title}</h2>
              <p>{props.subtitle}</p>
              <NavLink
                exact
                to="/"
                className="link-btn link-btn--reverse"
                title={props.linkText}
              >
                {props.linkText}
              </NavLink>
            </div>
          </div>

          <div className="col-6 not-found">
            <div className="image">
              <img src={NotFoundImage} alt="404 Not Found" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

NotFound.propTypes = propTypes; // from Line 11
NotFound.defaultProps = defaultProps; // from Line 17

export default NotFound;
