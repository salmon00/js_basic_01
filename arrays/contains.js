function contain(array, element) {
  for (var i = 0;  i < array.length; i++) {
    if(element === array[i]) {
      return true;
    }
  }
  return false;
}

console.log(contain([2, 3, 4], 5))
