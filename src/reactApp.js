import "babel-polyfill";
import React from 'react';
import {render} from 'react-dom';
import SpaWrapper from './modules/SpaWrapper/SpaWrapper.js';

function checkDom (fn) {
  console.log('checking dom');
  if (document.readyState !== 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', () => {
      if (document.readyState !== 'loading') {
        fn();
      }
    });
  }
}

function startup () {
    render(
    <SpaWrapper />,
    document.getElementById('root')
  );
}

// Check if the DOM is ready and startup
checkDom(startup);
