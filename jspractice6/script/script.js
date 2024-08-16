function isPrime(number) {
  let count = 0;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      count++;
      break;
    }
  }
  if (count === 0) alert("true");
  else {
    alert("false");
  }
}
const num = prompt("please enter number :");
if (isNaN(num)) {
  alert("invalid argument");
} else if (num === "1") alert("The number one is not prime, not composite");
else {
  isPrime(num);
}
