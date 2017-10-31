var favColor = 'mistyrose';

var getFavColor = function() {
  return favColor;
}

// module.exports = getFavColor;
 // can export function/variable/object

module.exports = {
  getFavColor: getFavColor,
  mostHatedColor: 'pink'
}
