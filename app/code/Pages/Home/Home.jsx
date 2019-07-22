/* Component  : Home is a Functional Component
 * Created on : 23/3/2019 17:25:03
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import MastHead from '../../Common/MastHead';
import { NavLink } from 'react-router-dom';
/* Functional Component Function below */
const Home = props => {
  //Define your Methods Here

  //Returns JSX below
  return (
    <React.Fragment>
      {/*Mast Head Starts here*/}
      <MastHead title={props.title} linkText={props.linkText} />
      {/*Mast Head Ends here*/}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h2>Styles</h2>
              <p>
                Make your styles look uniform like DS.UK with guides for
                applying layout, typography, colour and images.
              </p>
              <NavLink to="/styles" title="Browse Styles">
                Browse Styles
              </NavLink>
            </div>

            <div className="col-6">
              <h2>Components</h2>
              <p>
                Save time with reusable, accessible components for forms,
                navigation, panels, icons, tables and more.
              </p>
              <NavLink to="/components" title="Browse Components">
                Browse Components
              </NavLink>
            </div>
          </div>
          <div className="row row--spacing row--spacing-top">
            <hr />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h2>Community</h2>
              <p>
                The Design System is for everyone, with a strong community
                sitting behind it. It brings together the latest research,
                design and development from across the web with best practices
                to make sure it's usable across the world with standard user
                experience.
              </p>
            </div>
          </div>
          <div className="row row--spacing row--spacing-top">
            <hr />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h2>Support</h2>
              <p>
                The Design System is maintained by VAM Digital. If you've got a
                question, idea or suggestion you can :
              </p>
              <ul className="bulleted">
                <li>
                  email{' '}
                  <a
                    href="mailto:designsystem@vamdigital.com"
                    title="email support"
                  >
                    designsystem@vamdigital.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row row--spacing row--spacing-top">
            <hr />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
