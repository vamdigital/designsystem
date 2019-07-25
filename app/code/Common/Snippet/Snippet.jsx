/* Component 	: Styles is a Stateful Component
 * Created on	: 13/7/2019 16:52:32
 * Created by	: Vaibhav Shringarpure
 */

import React, { useEffect } from 'react';
// Import PrismJS package
import Prism from 'prismjs';

const Snippet = ({ language, children }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div className="row">
      <div className="language">{language}</div>
      <div className="code-snippet">
        <pre className={`language-${language}`}>
          <code className={`language-${language}`}>{`${children}`}</code>
        </pre>
      </div>
    </div>
  );
};

export default Snippet;
