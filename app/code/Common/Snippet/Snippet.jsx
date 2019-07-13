/* Component 	: Styles is a Stateful Component
 * Created on	: 13/7/2019 16:52:32
 * Created by	: Vaibhav Shringarpure
 */

import React, { useEffect } from 'react';
// Import PrismJS package
import Prism from 'prismjs';

const Snippet = ({ language, source }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div className="row">
      <div className="language">{language}</div>
      <div className="code-snippet">
        <pre className={`language-${language}`}>
          <code className={`language-${language}`}>
            {' '}
            {`.app-masthead {
    background: $hm-yellow;
    display: flex;
    padding: 30px;
    width: 100%;
    &--title {
      color: $hm-black;
      margin-bottom: 0;
    }
    &__link {
      margin-top: 30px;
    }
  }
                `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Snippet;
