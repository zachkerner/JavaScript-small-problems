// function randomGreeting() {
//   const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
//                'Greetings', 'Salutations', 'Good to see you'];

//   const idx = Math.floor(Math.random() * words.length);

//   return words[idx];
// }

// function greet(...args) {
// //   const names = Array.prototype.slice.call(args);

// //   for (let i = 0; i < names.length; i++) {
// // //     const name = names[i];
// // //     const greeting = randomGreeting();

// // //     console.log(`${greeting}, ${name}!`);
// // //   }
// // // }

// // // greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');

// // function wantToVisit(museum, city) {
// //   return museum.includes('Computer')
// //       || museum.includes('Science')
// //     || !(
// //         museum.includes('Modern')
// //         && museum.includes('Art')
// //         && museum.includes('Andy Warhol')
// //         || city === 'Amsterdam'
// //       );
// // }

// // // Tests (should all print 'true')

// // //console.log(wantToVisit('Computer Games Museum', 'Berlin') === true);
// // //console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
// // //console.log(wantToVisit('Museum of Modern Art', 'New York') === false);
// // //console.log(wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
// // console.log(wantToVisit('NEMO Science Museum', 'Amsterdam') === true);
// // console.log(wantToVisit('National Museum of Modern Art', 'Paris') === false);
// // console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true);
// // console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true);
// // console.log(wantToVisit('Van Gogh Museum', 'Amsterdam') === false);
// // console.log(wantToVisit('Andy Warhol Museum', 'Melbourne') === false);

// const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
// const isMidnight = true;
// const isFullmoon = true;

// function isTransformable(species) {
//   return species[0] === 'w';
// }

// function transform(species) {
//   return `were${species}`;
// }

// for (let index = 0; index < species.length; index++) {
//   const thisSpecies = species[index];
//   var newSpecies;

//   if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
//     newSpecies = transform(thisSpecies);
//   }

//   if (newSpecies) {
//     console.log(`Beware of the ${newSpecies}!`);
//   }
// }

var numJewelsInStones = function(jewels, stones) {
  let stonesArr = stones.split("")
  let jewelsArr = jewels.split("")
  let obj = {}
  stonesArr.forEach((stone) => {
    obj[stone] ? obj[stone] += 1 : obj[stone] = 1
  })
  let result = 0
  jewelsArr.forEach((jewel) => {
      if (obj[jewel]) {
          result += obj[jewel]
      }
  })
  return result
};

var reverseWords = function(s) {
  let str = ""
  let current = ""
  for (let i = 0; i < s.length; i ++) {
    console.log(current)
      if (s[i] === " ") {
          str += current
          str += " "
          current = ""
      } else {
          current = s[i] + current
      }
  }
  str += current
  return str
};

console.log(reverseWords('Zach Korner'))