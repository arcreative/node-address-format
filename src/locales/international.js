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
