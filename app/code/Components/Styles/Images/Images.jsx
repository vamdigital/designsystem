/* Component  : Images is a Functional Component
 * Created on : 22/7/2019 12:15:06 AM
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import DesktopSource from '../../../../assets/images/empty_cafe_800w.jpg';
import MobileSource from '../../../../assets/images/empty_cafe_400w.jpg';
import Snippet from '../../../Common/Snippet';

/* Type Checking for PropTypes */
const propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string,
  title: PropTypes.string,
  desktopSource: PropTypes.string,
  mobileSource: PropTypes.string,
  figcaption: PropTypes.string,
  altText: PropTypes.string.isRequired
};

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
  title: 'Images',
  desktopSource: DesktopSource,
  mobileSource: MobileSource,
  figcaption: '',
  altText: 'Image alternate text'
};

/* Functional Component Function below */
const Images = ({
  title,
  mobileSource,
  desktopSource,
  figcaption,
  altText
}) => {
  //Define your Methods Here
  const snippet = useRef(null);
  //Returns JSX below
  return (
    <>
      <h2 className="section-title">{title}</h2>
      <p>
        Avoid unnecessary decoration. Only use images if you really need to use
        them to help the user experience of the product.
      </p>
      <p>
        We use the{' '}
        <code>
          <picture /> element to create the image. You need to provide different
          images for different devices to have an art direction. Every image
          must provide an alternate text for accessibility reason.
        </code>
      </p>
      <div ref={snippet}>
        <picture>
          <source media="(max-width: 790px)" srcSet={mobileSource} />
          <source media="(min-width: 800px)" srcSet={desktopSource} />
          <img src={desktopSource} alt={altText} title={altText} />
          <span className="figcaption">{figcaption}</span>
        </picture>
      </div>

      <h3 className="code-snippet-title">Code Snippet</h3>
      <Snippet language="html" codeRef={snippet} />
    </>
  );
};

Images.propTypes = propTypes; // from Line 11
Images.defaultProps = defaultProps; // from Line 17

export default Images;
