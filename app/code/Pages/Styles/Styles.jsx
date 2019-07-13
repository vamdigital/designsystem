/* Component 	: Styles is a Stateful Component
 * Created on	: 23/3/2019 19:04:42
 * Created by	: Vaibhav Shringarpure
 */

/* Import Statement Below */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../../Common/List/List';
import data from './Styles-data.yaml';
import Snippet from '../../Common/Snippet/Snippet';

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
    const ListItems = data.styles.list;
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>{this.props.title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <nav>
                <ul>
                  <List listArray={ListItems} />
                </ul>
              </nav>
            </div>
            <div className="col-8">
              <Snippet language="scss">
                {`.app-masthead {
    background: $hm-yellow;
    display: flex;
    padding: 30px;
    width: 100%;
    &--title {
      color: $hm-black;
      margin-bottom: 0;
    }
    &__link {
      margin-top: 30px;
    }
  }
                `}
              </Snippet>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

//Typechecking with PropTypes
Styles.propTypes = propTypes; // from Line 11
Styles.defaultProps = defaultProps; // from Line 17

export default Styles;
