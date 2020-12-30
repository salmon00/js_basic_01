function max(array) {
  var largest = 0;
  for(var i = 0; i < array.length; i++) {
    if (largest < array[i]) {
      var largest = array[i];
    }
  }
  return largest;
}
console.log(max([8, 9, 5]));