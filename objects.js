let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

function objectHasProperty(object, property) {
  let keys = Object.keys(object)
  return keys.indexOf(property) !== -1
}

let wins = {
  steve: 3,
  susie: 4,
};

function incrementProperty(object, property) {
  if (objectHasProperty(object, property)) {
    object[property] += 1
    return object[property]
  }
  object[property] = 1
  return 1
}

let hal = {
  model: 9000,
  enabled: true,
};

function copyProperties(obj1, obj2) {
  for (let prop in obj1) {
    obj2[prop] = obj1[prop]
  }
  return Object.keys(obj1).length
}

let sal = {};


function wordCount(words) {
  let arr = words.split(" ")
  let obj = {}
  for (let i = 0; i < arr.length; i ++){
    obj[arr[i]] ? obj[arr[i]] += 1 : obj[arr[i]] = 1
  }
  return obj
}

function radiansToDegrees(radians) {
  return (radians * (180/Math.PI)) % 360
}
radiansToDegrees = radians => radians / (Math.PI/ 180)

let positiveNum = num => Math.abs(num)

let sqrt = num => Math.sqrt(num)

let power = (base, exp) => Math.pow(base, exp)

let floored = num => Math.floor(num)

let ceiled = num => Math.ceil(num)

let rounders = num => Math.round(num)

let stam = (min, max) => (Math.random() * (max - min)) + (max - min - 1)

let today = new Date()

let dayOfWeek = () => `Today is day number ${today.getDay()}.`

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


function greeting(arr, obj) {
  return `Hello ${arr.join(" ")}! Its nice to have a ${obj.title} ${obj.occupation} around.`
}

function repeatedChars(str) {
  let obj = {}
  for (let i = 0; i < str.length; i ++) {
    obj[str[i]] ? obj[str[i]] += 1 : obj[str[i]] = 1
  }
  return obj
}

console.log(repeatedChars('the clean brown room'))