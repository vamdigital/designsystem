/* Component  : Footer is a Functional Component
 * Created on : 17/3/2019 17:24:37
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';

/* Functional Component Function below */
const Footer = props => {
  //Define your Methods Here
  const d = new Date();
  const fullYear = d.getFullYear();
  //Returns JSX below
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="small">
              &copy; Copyright {fullYear} Design System - A VAM Digital
              initiative
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
