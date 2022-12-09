function howManyHundreds(num) {
  const x = num % 100
  let crates = 0
  if(x === 0) {
    crates = num / 100;
  } else if (x !== 0) {
    crates = Math.floor(num / 100);
  }
  return crates 
}

console.log(howManyHundreds(958));