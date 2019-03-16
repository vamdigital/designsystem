/* Component  : SubHeader is a Functional Component
 * Created on : 3/3/2019 16:38:27
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';

import data from './SubHeader-data.yaml';

import Styles from './SubHeader.scss';

import List from '../../Common/List/List';

/* Functional Component Function below */
const SubHeader = props => {
  //Define your Methods Here

  //Returns JSX below
  return (
    <div className={[Styles.subheader].join(' ')}>
      <ul className="container">
        <List
          listArray={data.subheader}
          listClassName={Styles.subheaderList}
          listLinkClassName={Styles.subheaderLink}
        />
      </ul>      
    </div>
  );
};

export default SubHeader;
