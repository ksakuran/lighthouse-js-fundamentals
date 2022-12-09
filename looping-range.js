const range = function(start, end, step) {
  let someArray = [];
  if(start > end || start === undefined || end === undefined || step === undefined || step <= 0) {
    return someArray;    
  } else {
    for (let x = start; x <= end; x += step){
      someArray.push(x);
    }
  }
  return someArray;
}

console.log(range(0,10,2));
console.log(range(10,30,5));
console.log(range(-5, 2, 3));
