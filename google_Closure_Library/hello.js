/**
 * @fileoverview Closure getting started tutorial code example.
 */
goog.module('hello');

const {TagName, createDom} = goog.require('goog.dom');

/**
 * Appends an `h1` tag to the body with the message "Hello world!".
 */
function sayHi() {
  const newHeader = createDom(TagName.H1, {'style': 'background-color:#EEE'},
    'Hello world!');
  document.body.appendChild(newHeader);
}

sayHi();