/* Component 	: Styles is a Stateful Component
 * Created on	: 13/7/2019 16:52:32
 * Created by	: Vaibhav Shringarpure
 */

import React, { useState, useEffect, useRef } from 'react';
// Import PrismJS package
import Prism from 'prismjs';
import Process from '../../Common/FormatHTML';

const Snippet = ({ language, codeRef }) => {
  const [code, setCode] = useState(null);
  useEffect(() => {
    Prism.highlightAll();
    const markup = codeRef.current.innerHTML;
    const formattedMarkup = Process(markup);
    setCode(formattedMarkup);
  }, [code]);

  return (
    <div className="row">
      <div className="language">{language}</div>
      <div className="code-snippet">
        <pre className={`language-${language}`}>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default Snippet;
