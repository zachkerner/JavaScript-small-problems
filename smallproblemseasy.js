//1

// for (let i = 1; i < 100 ; i += 2) {
//   console.log(i)
// }

//2

// for (let i = 2; i < 100 ; i += 2) {
//   console.log(i)
// }

//6

// function shortLongShort(str1, str2) {
//   str1.length > str2.length ? console.log(str2 + str1 + str2) : console.log(str1 + str2 + str1)
// }

//7

function isLeapYear(year) {
  if (year > 1752) {
  year % 100 === 0 ? console.log(year % 400 === 0) : console.log(year % 4 === 0)
  } else {
    console.log(year % 4 === 0)
  }
}

//8
//9

function multisum(num) {
  result = 0
  for (let i = 3 ; i <= num; i ++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i
    }
  }
  console.log(result)
}
 //10

 function utf16Value(str) {
  result = 0
  for (let i = 0; i < str.length; i ++ ) {
    result += str[i].charCodeAt()
  }
  console.log(result)
 }


utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

