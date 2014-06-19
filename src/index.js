var locales = require('./locales');

module.exports = function(address) {
  return (locales[address.countryCode] || locales.international)(address);
};

module.exports.locales = locales;
