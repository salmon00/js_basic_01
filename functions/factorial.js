function factorial(n) {
var result = n;
for(var result = n; n >= 2; n--) {
  result = result * (n - 1)
}
 return result;
}
console.log(factorial(10)) 
