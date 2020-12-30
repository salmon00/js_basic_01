function kebabToSnake(str) {
  return str = str.replace('-','_');
}

console.log(kebabToSnake("hello-world"));