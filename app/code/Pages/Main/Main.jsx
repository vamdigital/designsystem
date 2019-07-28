/* Component  : Main is a Functional Component
 * Created on : 17/3/2019 15:10:09
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

/* Import all Pages and Components Below */
import Home from '../../Pages/Home';
import Styles from '../../Pages/Styles';
import Components from '../../Pages/Components';
import NotFound from '../../Pages/NotFound';

const homeTitle = 'Design your service using DS styles and components';

const Main = () => {
  const [isTop, setIsTop] = useState(false);
  window.onscroll = function() {
    const topPos = window.pageYOffset;
    if (topPos >= 450) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };
  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <Home title={homeTitle} />} />
        <Route path="/styles" render={() => <Styles />} />
        <Route path="/components" render={() => <Components />} />
        <Route component={NotFound} />
      </Switch>

      <div className="back-to-top">
        <a href="#top" className={isTop ? '' : 'back-to-top-hidden'}>
          Back to top
        </a>
      </div>
    </main>
  );
};

export default Main;
