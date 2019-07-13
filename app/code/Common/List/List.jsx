/* Component  : List is a Functional Component
 * Created on : 2/3/2019 17:38:37
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Type Checking for PropTypes */
const propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string,
  listArray: PropTypes.array,
  listClassName: PropTypes.string,
  listLinkClassName: PropTypes.string
};

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
  listArray: [],
  listClassName: '',
  listLinkClassName: ''
};

const removeFocus = e => {
  e.currentTarget.blur();
};

const List = props => {
  let listItem = null;
  if (props.listArray.length) {
    listItem = props.listArray.map((list, index) => {
      const keyVal = list.id ? list.id : index;
      return (
        <li key={keyVal} className={props.listClassName}>
          <NavLink
            to={`/${list.url}`}
            activeClassName="active"
            onClick={removeFocus}
          >
            {list.key}
          </NavLink>
        </li>
      );
    });
  }

  return <React.Fragment>{listItem}</React.Fragment>;
};

List.propTypes = propTypes; // from Line 13
List.defaultProps = defaultProps; // from Line 22

export default List;
