const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};


function calculateBonus(...args) {
  return args[1] ? args[0] / 2 : 0;
}

function penultimate(string) {
  let strArr = string.split(" ")
  return string.split(' ')[strArr.length - 2]
}

console.log(penultimate('last word'))                 // expected: "last"
console.log(penultimate('Launch School is great!'))      // expected: "is"