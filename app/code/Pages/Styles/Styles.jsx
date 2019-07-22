/* Component 	: Styles is a Stateful Component
 * Created on	: 23/3/2019 19:04:42
 * Created by	: Vaibhav Shringarpure
 */

/* Import Statement Below */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../../Common/List';
import data from './Styles-data.yaml';
import { Switch, Route } from 'react-router-dom';
import Introduction from '../../Components/Styles/Introduction';
import Colour from '../../Components/Styles/Colour';
import Images from '../../Components/Styles/Images';

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
            <div className="col-2">
              <nav className="subpage-navigation">
                <ul>
                  <List listArray={ListItems} />
                </ul>
              </nav>
            </div>
            <div className="col-10">
              {/* Put your routes Here */}
              <Switch>
                <Route path="/styles" exact render={() => <Introduction />} />
                <Route path="/styles/colour" exact render={() => <Colour />} />
                <Route path="/styles/images" exact render={() => <Images />} />
              </Switch>
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
