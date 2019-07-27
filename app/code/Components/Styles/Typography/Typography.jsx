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
  const heading = useRef(null);
  const caption = useRef(null);
  const body = useRef(null);
  const lead = useRef(null);
  const small = useRef(null);
  const links = useRef(null);
  const list = useRef(null);
  const bullet = useRef(null);
  const numbered = useRef(null);

  //Define your Methods Here

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
          Caption - xl
        </span>
        <h1> Design system heading - xl </h1>

        <span className={`${Style['caption']} ${Style['caption--l']}`}>
          Caption - l
        </span>
        <h2> Design System heading - l </h2>
        <span className={`${Style['caption']} ${Style['caption--m']}`}>
          Caption - m
        </span>
        <h3> Design System heading - m </h3>

        <span className={`${Style['caption']} ${Style['caption--s']}`}>
          Caption - s
        </span>
        <h4> Design System heading - s </h4>
      </div>
      <h4 className="code-snippet-title">Code Snippet</h4>
      <Snippet language="html" codeRef={caption} />

      <h3>Paragraphs</h3>
      <h3 className="code-sample-title">Body</h3>
      <p>
        The default paragraph font-size is 19px on large screen and 16px on
        small screens.
      </p>

      <div className="code-sample" ref={body}>
        <p> Quick brown fox jumps over the lazy dog </p>
      </div>

      <h4 className="code-snippet-title">Code Snippet</h4>
      <Snippet language="html" codeRef={body} />
      <p>
        You can also add classes to create a lead paragraph or smaller body copy
        to convey hierarchy in your page.
      </p>

      <h3 className="code-sample-title">Lead Paragraph</h3>
      <p>
        A lead paragraph is an introductory paragraph that you can use at the
        top of a page to summarise the content. Lead paragraphs use 24px type on
        desktop and should only be used once per page if needed.
      </p>

      <div className="code-sample" ref={lead}>
        <p className="lead"> Quick brown fox jumps over the lazy dog </p>
      </div>

      <h4 className="code-snippet-title">Code Snippet</h4>
      <Snippet language="html" codeRef={lead} />

      <h3 className="code-sample-title">Body small</h3>
      <p>
        You can use the 'small' class sparingly to make your paragraph font size
        smaller: 16px on larger screens and 14px on smaller screens.
      </p>
      <p>
        The majority of your body copy should use the standard 19px paragraph
        size.
      </p>

      <div className="code-sample" ref={small}>
        <p className="small"> Quick brown fox jumps over the lazy dog </p>
      </div>

      <h4 className="code-snippet-title">Code Snippet</h4>
      <Snippet language="html" codeRef={small} />

      <h3 className="code-sample-title">Links</h3>
      <p>
        Links are blue by default. If your link is at the end of a sentence or
        paragraph, make sure that the linked text does not include the full
        stop.
      </p>

      <div className="code-sample" ref={links}>
        <a href="#"> Link to Section </a>
      </div>

      <h4 className="code-snippet-title">Code Snippet</h4>
      <Snippet language="html" codeRef={links} />

      <h3 className="code-sample-title">Lists</h3>
      <p>
        Use lists to make blocks of text easier to read, and to break
        information into manageable chunks.
      </p>

      <div className="code-sample" ref={list}>
        <ul>
          <li> List Item One </li>
          <li> List Item Two </li>
          <li> List Item Three </li>
          <li> List Item Four </li>
        </ul>
      </div>

      <h4 className="code-snippet-title">Code Snippet</h4>
      <Snippet language="html" codeRef={list} />

      <h3 className="code-sample-title">Bulleted lists</h3>
      <p>
        Introduce bulleted lists with a lead-in line ending in a colon. Start
        each item with a lowercase letter, and do not use a full stop at the
        end.
      </p>

      <div className="code-sample" ref={bullet}>
        <ul className="bulleted">
          <li> List Item One </li>
          <li> List Item Two </li>
          <li> List Item Three </li>
          <li> List Item Four </li>
        </ul>
      </div>

      <h4 className="code-snippet-title">Code Snippet</h4>
      <Snippet language="html" codeRef={bullet} />

      <h3 className="code-sample-title">Numbered lists</h3>
      <p>
        Introduce bulleted lists with a lead-in line ending in a colon. Start
        each item with a lowercase letter, and do not use a full stop at the
        end.
      </p>

      <div className="code-sample" ref={numbered}>
        <ol>
          <li> List Item One </li>
          <li> List Item Two </li>
          <li> List Item Three </li>
          <li> List Item Four </li>
        </ol>
      </div>
      <h4 className="code-snippet-title">Code Snippet</h4>
      <Snippet language="html" codeRef={numbered} />
    </>
  );
};

Typography.propTypes = propTypes; // from Line 11
Typography.defaultProps = defaultProps; // from Line 17

export default Typography;
