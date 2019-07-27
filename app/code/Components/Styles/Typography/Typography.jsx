/* Component  : Typography is a Functional Component
 * Created on : 27/7/2019 3:50:36 PM
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Style from './Typography.scss';

import Snippet from '../../../Common/Snippet';
/* Type Checking for PropTypes */
const propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string,
  title: PropTypes.string
};

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
  title: 'Typography'
};

/* Functional Component Function below */
const Typography = ({ title }) => {
  //Define your Methods Here
  const heading = useRef(null);
  const caption = useRef(null);
  //Returns JSX below
  return (
    <>
      <h2 className="section-title">{title}</h2>
      <h3>Font</h3>
      <p>
        Design System advocates to make use of web-safe fonts always to render
        across multiple web platforms. We at VAM Digital use Google's Nunito
        font with variance of 400 and 700 for regular and bold typeface with a
        fallback font of 'sans-serif'
      </p>

      <h3>Headings</h3>
      <p>
        Use headings consistently to create a clear hierarchy throughout the
        application
      </p>
      <p>
        Markup headings semantically using the appropriate {`<h#>`} level HTML
        element and use the corresponding heading class to apply the Design
        System Styles.
      </p>
      <p>
        Write all the headings in sentence case and transform it using css
        classes
      </p>

      <div className="code-sample" ref={heading}>
        <h1> Design system heading - xl </h1>
        <h2> Design System heading - l </h2>
        <h3> Design System heading - m </h3>
        <h4> Design System heading - s </h4>
      </div>
      <h4 className="code-snippet-title">Code Snippet</h4>
      <Snippet language="html" codeRef={heading} />

      <h3 className="code-sample-title">Headings with Caption</h3>
      <div className="code-sample" ref={caption}>
        <span className={`${Style['caption']} ${Style['caption--xl']}`}>
          {' '}
          Caption - xl{' '}
        </span>
        <h1> Design system heading - xl </h1>
        <span className={`${Style['caption']} ${Style['caption--l']}`}>
          {' '}
          Caption - l{' '}
        </span>
        <h2> Design System heading - l </h2>
        <span className={`${Style['caption']} ${Style['caption--m']}`}>
          {' '}
          Caption - m{' '}
        </span>
        <h3> Design System heading - m </h3>
        <span className={`${Style['caption']} ${Style['caption--s']}`}>
          {' '}
          Caption - s{' '}
        </span>
        <h4> Design System heading - s </h4>
      </div>
      <h4 className="code-snippet-title">Code Snippet</h4>
      <Snippet language="html" codeRef={caption} />
    </>
  );
};

Typography.propTypes = propTypes; // from Line 11
Typography.defaultProps = defaultProps; // from Line 17

export default Typography;
