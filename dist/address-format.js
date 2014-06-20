!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.addressFormat=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var locales = _dereq_('./locales');

module.exports = function(address) {
  return (locales[address.countryCode] || locales.international)(address);
};

module.exports.locales = locales;

},{"./locales":2}],2:[function(_dereq_,module,exports){
module.exports = {
  DK: _dereq_('./locales/dk'),
  US: _dereq_('./locales/us'),
  international: _dereq_('./locales/international')
};

},{"./locales/dk":3,"./locales/international":4,"./locales/us":5}],3:[function(_dereq_,module,exports){
module.exports = function(a) {
  var lines = [];
  if (a.address) lines.push(a.address);
  if (a.address2) lines.push(a.address2);
  if (a.address3) lines.push(a.address3);
  if (a.city || a.subdivision || a.postalCode) {
    var line = [];
    if (a.postalCode) line.push(a.postalCode);
    if (a.city) line.push(a.city);
    lines.push(line.join(' '));
  }
  return lines;
};

},{}],4:[function(_dereq_,module,exports){
module.exports = function(a) {
  var lines = [];
  if (a.address) lines.push(a.address);
  if (a.address2) lines.push(a.address2);
  if (a.address3) lines.push(a.address3);
  if (a.city || a.subdivision || a.postalCode) {
    var line = [];
    if (a.city) line.push(a.city);
    if (a.subdivision) line.push(a.subdivision);
    if (a.postalCode) line.push(a.postalCode);
    lines.push(line.join(' '));
  }
  return lines;
};

},{}],5:[function(_dereq_,module,exports){
module.exports = function(a) {
  var lines = [];
  if (a.address) lines.push(a.address);
  if (a.address2) lines.push(a.address2);
  if (a.address3) lines.push(a.address3);
  if (a.city || a.subdivision || a.postalCode) {
    var line = [];
    if (a.city) line.push(a.city);
    if (a.subdivision) line.push(a.subdivision);
    if (line.length) {
      line = [line.join(', ')]
    }
    if (a.postalCode) line.push(a.postalCode);
    lines.push(line.join(' '));
  }
  return lines;
};

},{}]},{},[1])
(1)
});