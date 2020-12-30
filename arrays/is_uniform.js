function isUniform(array) {
  var first = array[0];
  for (var i = 0; i < array.length; i++){
    if(first === array[i]) {
      return true;
    }
    else {
      return false;
    }
  }
}
console.log(isUniform([1, 1, 1, 1]));


