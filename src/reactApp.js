import "babel-polyfill";
import React from 'react';
import {render} from 'react-dom';
import SpaWrapper from './SpaWrapper/SpaWrapper.js';

function checkDom (fn) {
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
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  );
}

// Check if the DOM is ready and startup
checkDom(startup);
