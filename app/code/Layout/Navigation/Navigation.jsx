/* Component 	: Navigation is a Stateful Component
 * Created on	: 1/3/2019 22:22:34
 * Created by	: Vaibhav Shringarpure
 */

/* Import Statement Below */
import React, { Component } from 'react';
import List from '../../Common/List';

import data from './Navigation-data.yaml';

/* Stateful Component Class Below */
class Navigation extends Component {
  //Constructor Method below
  constructor(props) {
    super(props);
    this.state = {};
  }

  //Define your Methods Here

  //Render Method returning JSX
  render() {
    const ListItems = data.navigation.list;

    return (
      <React.Fragment>
        <ul>
          <List listArray={ListItems} listLinkClassName="navlink" />
        </ul>
      </React.Fragment>
    );
  }
}

export default Navigation;
