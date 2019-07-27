/* Component 	: Styles is a Stateful Component
 * Created on	: 13/7/2019 16:52:32
 * Created by	: Vaibhav Shringarpure
 */

import React, { useState, useEffect, useRef } from 'react';
// Import PrismJS package
import Prism from 'prismjs';
import Process from '../../Common/FormatHTML';
import Toaster from '../../Common/Toaster';

const Snippet = ({ language, codeRef }) => {
  const [code, setCode] = useState(null);
  const [isVisible, setIsVisible] = useState(null);
  const codesnipp = useRef(null); // Copy to Clipboard reference

  useEffect(() => {
    Prism.highlightAll();
    const markup = codeRef.current.innerHTML;
    const formattedMarkup = Process(markup);
    setCode(formattedMarkup);
    setIsVisible(false);
  }, [code]);

  const codeCopy = node => {
    // Get the node you want to copy to clipboard - which is passed as parameter
    let range = document.createRange();
    range.selectNode(node);
    window.getSelection().addRange(range);
    try {
      // Now that we've selected the content, execute the copy command
      document.execCommand('copy');
      // Create Toast Message Here
      setIsVisible(true);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
    // Remove the selections
    window.getSelection().removeAllRanges();
    setTimeout(() => {
      setIsVisible(false);
    }, 6000);
  };

  return (
    <div className="row">
      <div className="language">
        <span className="col-6">{language}</span>
        <span className="col-6 col-text-right">
          <button
            className="copy-code-btn"
            onClick={() => codeCopy(codesnipp.current)}
          >
            Copy to clipboard
          </button>
        </span>
      </div>
      <div className="code-snippet" ref={codesnipp}>
        <pre className={`language-${language}`}>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
      {isVisible && (
        <Toaster message="Copied successfully" isVisible={isVisible} />
      )}
    </div>
  );
};

export default Snippet;
