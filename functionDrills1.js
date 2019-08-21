// function createGreeting() {
//   return ("Hello, my name is Steven and I am 26 years old.")
// }
const greeting1 = createGreeting("Steven", 26);
console.log(greeting1);

function createGreeting(name, age) {
  const YOB = getYearOldBirth(age)
  return `Hello, my name is ${name} and I am ${age} years old. ${YOB}`;
}


function getYearOldBirth(age) {
  const yearOfBirth = 2019 - age;
  return `I was born in ${yearOfBirth}`;
}

// function yearOfBirth(age) {
//   if
// }

