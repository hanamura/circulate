module.exports = function(number, start, end) {
  if (start === end) {
    return start;
  }

  if (start > end) {
    var _start = start;
    start = end;
    end = _start;
  }

  var volume = end - start;

  number -= start;
  number %= volume;
  number += number < 0 ? volume : 0;
  number += start;

  return number;
};
