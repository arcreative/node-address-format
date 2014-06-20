(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var locales = require('./locales');

module.exports = function(address) {
  return (locales[address.countryCode] || locales.international)(address);
};

module.exports.locales = locales;

},{"./locales":2}],2:[function(require,module,exports){
module.exports = {
  DK: require('./locales/dk'),
  US: require('./locales/us'),
  international: require('./locales/international')
};

},{"./locales/dk":3,"./locales/international":4,"./locales/us":5}],3:[function(require,module,exports){
module.exports = function(address) {
  var lines = [];
  if (address.address) lines.push(address.address);
  if (address.address2) lines.push(address.address2);
  if (address.address3) lines.push(address.address3);
  if (address.city || address.subdivision || address.postalCode) {
    var line = [];
    if (address.postalCode) line.push(address.postalCode);
    if (address.city) line.push(address.city);
    lines.push(line.join(' '));
  }
  return lines;
};

},{}],4:[function(require,module,exports){
module.exports = function(address) {
  var lines = [];
  if (address.address) lines.push(address.address);
  if (address.address2) lines.push(address.address2);
  if (address.address3) lines.push(address.address3);
  if (address.city || address.subdivision || address.postalCode) {
    var line = [];
    if (address.city) line.push(address.city);
    if (address.subdivision) line.push(address.subdivision);
    if (address.postalCode) line.push(address.postalCode);
    lines.push(line.join(' '));
  }
  return lines;
};

},{}],5:[function(require,module,exports){
module.exports = function(address) {
  var lines = [];
  if (address.address) lines.push(address.address);
  if (address.address2) lines.push(address.address2);
  if (address.address3) lines.push(address.address3);
  if (address.city || address.subdivision || address.postalCode) {
    var line = [];
    if (address.city) line.push(address.city);
    if (address.subdivision) line.push(address.subdivision);
    if (line.length) {
      line = [line.join(', ')]
    }
    if (address.postalCode) line.push(address.postalCode);
    lines.push(line.join(' '));
  }
  return lines;
};

},{}]},{},[1])