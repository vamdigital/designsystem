/* Component  : Colour is a Functional Component
 * Created on : 20/7/2019 3:59:54 PM
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import data from './Colour-data.yaml';
import Toaster from '../../../Common/Toaster';

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
  const [isVisible, setIsVisible] = useState(null);
  const [show, setShow] = useState(false);

  const codeCopy = text => {
    let input = document.createElement('input');
    document.body.appendChild(input);
    input.value = text;
    input.select();
    try {
      document.execCommand('copy');
      console.log('copied successful');
      // Create Toast Message Here
      setIsVisible(true);
      setShow(true);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
    // Remove the selections
    input.remove();
    setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    setTimeout(() => {
      setShow(false);
    }, 6000);
  };

  const copyToClipBoard = clickedItem => {
    const text = `#${clickedItem}`;
    codeCopy(text);
  };

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
              <div key={index} className="colour-list-title">
                <h4 className="colour-list-title__text">{title}</h4>
              </div>,
              <div key={index + 1} className="colour-list">
                {Object.keys(arr).map(arrayKey => {
                  const Items = arr[arrayKey];
                  return Items.map((item, index) => {
                    return Object.keys(item).map(itemKey => {
                      return (
                        <div
                          key={index}
                          className="colour-list__item"
                          style={{ backgroundColor: `#${item[itemKey]}` }}
                          onClick={() => {
                            copyToClipBoard(item[itemKey]);
                          }}
                        >
                          <div className="colour-list__label">
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
        {show && (
          <Toaster message="Copied successfully" isVisible={isVisible} />
        )}
      </div>
    </>
  );
};

Colour.propTypes = propTypes; // from Line 11
Colour.defaultProps = defaultProps; // from Line 17

export default Colour;
