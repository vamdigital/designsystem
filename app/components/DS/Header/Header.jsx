/* Component  : Header is a Functional Component
 * Created on : 3/3/2019 15:08:35
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyles from './Header.scss';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/icons/ds_logo.svg';

import SubHeader from '../SubHeader/SubHeader';

/* Type Checking for PropTypes */
const propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string,
  title: PropTypes.string
};

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
  title: 'Design System'
};

/* Functional Component Function below */
const Header = props => {
  //Define your Methods Here

  //Returns JSX below
  return (
    <React.Fragment>
      <header className={HeaderStyles.header}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Link
                to="/"
                title={props.title}
                className={HeaderStyles['logo-link']}
              >
                <img
                  src={Logo}
                  alt={props.title}
                  className={HeaderStyles.logo}
                />
                <h3 className={HeaderStyles.title}>{props.title}</h3>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <SubHeader />
    </React.Fragment>
  );
};

Header.propTypes = propTypes; // from Line 11
Header.defaultProps = defaultProps; // from Line 17

export default Header;
