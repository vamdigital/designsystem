/* Component  : Colour is a Functional Component
 * Created on : 20/7/2019 3:59:54 PM
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import PropTypes from 'prop-types';
import data from './Colour-data.yaml';
import Styles from './Colour.scss';

/* Type Checking for PropTypes */
const propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string,
  title: PropTypes.string
};

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
  title: 'Colour'
};

/* Functional Component Function below */
const Colour = ({ title }) => {
  //Define your Methods Here
  const dataObj = data.colour;

  //Returns JSX below
  return (
    <>
      <h2 className="section-title">{title}</h2>
      <p>
        Always use the Colours from the palette below to maintain brand
        standard. If you are using sass to style your project then the colour
        reference looks like so: `$purple-colour` and if you are using css then
        the colour reference looks like so: `#2e358b`
      </p>
      <p>
        You must ensure that the colour used in the text and the element meet
        <a
          href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html"
          title="colour contrast WCGA 2.0"
          target="_blank"
          rel="noopener noreferrer"
        >
          level AA of the Web Content Accessibility Guidelines (WCGA 2.0)
        </a>
      </p>
      <div className="component-section">
        {Object.keys(dataObj).map(key => {
          const arr = dataObj[key];
          return Object.keys(arr).map((title, index) => {
            return [
              <div key={index} className={Styles['colour-list-title']}>
                <h3 className={Styles['colour-list-title__text']}>{title}</h3>
              </div>,
              <div key={index + 1} className={Styles['colour-list']}>
                {Object.keys(arr).map(arrayKey => {
                  const Items = arr[arrayKey];
                  return Items.map((item, index) => {
                    return Object.keys(item).map(itemKey => {
                      return (
                        <div
                          key={index}
                          className={[Styles['colour-list__item']].join(' ')}
                          style={{ backgroundColor: `#${item[itemKey]}` }}
                        >
                          <div
                            className={[Styles['colour-list__label']].join(' ')}
                          >
                            <span>
                              {itemKey} - #{item[itemKey]}
                            </span>
                          </div>
                        </div>
                      );
                    });
                  });
                })}
              </div>
            ];
          });
        })}
      </div>
    </>
  );
};

Colour.propTypes = propTypes; // from Line 11
Colour.defaultProps = defaultProps; // from Line 17

export default Colour;
