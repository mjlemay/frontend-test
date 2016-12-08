'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _SpaWrapper = require('./SpaWrapper/SpaWrapper.js');

var _SpaWrapper2 = _interopRequireDefault(_SpaWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkDom(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState !== 'loading') {
        fn();
      }
    });
  }
}

function startup() {
  (0, _reactDom.render)(_react2.default.createElement(
    'h1',
    null,
    'Hello, world!'
  ), document.getElementById('root'));
}

// Check if the DOM is ready and startup
checkDom(startup);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpaWrapper = function SpaWrapper() {
  return _react2.default.createElement(
    "div",
    { className: "SpaWrapper" },
    "Spa App goes here with child React components"
  );
};

exports.default = SpaWrapper;
//# sourceMappingURL=app.js.map
