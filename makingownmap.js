var words = ["ground", "control", "to", "major", "tom"];

function map(arr, callback) {
  var result = [];
  arr.forEach(function(element) {
    result.push(callback(element))
  })
  console.log(result);
}


map(words, function(word) {
    return word.length;
  });



map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

// function map(arr, callback) {
//   var result = [];
//   arr.forEach(function(element) {
//     result.push(callback(element))
//   })
//   return result;
//   // return word.length;
// }

// // map(words, doMap(arr))
