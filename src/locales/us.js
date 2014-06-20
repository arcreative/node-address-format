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
