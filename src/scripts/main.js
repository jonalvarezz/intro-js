// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  nebula = require('bespoke-theme-nebula'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  backdrop = require('bespoke-backdrop'),
  hash = require('bespoke-hash');

// Bespoke.js
bespoke.from('article', [
  nebula(),
  keys(),
  touch(),
  backdrop(),
  hash()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

// ZOOM KeyBoard Control
!(function (window, document) {

  'use strict';

  var ZOOMKEYS = [
    {keyCode: 48, factor: 0 }, // 0
    {keyCode: 49, factor: 1.2 }, // 1
    {keyCode: 50, factor: 1.8 }, // 2
    {keyCode: 51, factor: 2 }, // 3 ...
    {keyCode: 52, factor: 2.3 },
    {keyCode: 53, factor: 2.8 },
    {keyCode: 54, factor: 3 },
    {keyCode: 55, factor: 3.5 },
    {keyCode: 56, factor: 4 },
    {keyCode: 57, factor: 5 }
  ];
  var BODY = document.body;

  BODY.addEventListener('keypress', onKeyPress);

  function onKeyPress(event) {
    var key = event.keyCode;
    var zoom = ZOOMKEYS.filter(function (obj) {
      return key === obj.keyCode;
    });

    if (zoom.length > 0) {
      document.body.style.zoom = zoom[0].factor;
    }
  }


})(window, document);
