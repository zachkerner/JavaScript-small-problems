function crunch(word) {
  let result = ""
  for (let i = 0; i < word.length; i ++) {
    if (word[i] === result[result.length - 1]) {
      continue
    } else {
      result += word[i]
    }

  }
  return result
}

function stringify(number) {
  let result = ""
  const MARKERS = ['1', '0']
  for (let i = 0; i < number; i ++) {
    let remainder = i % 2
    if (remainder === 0) {
      result += MARKERS[remainder]
    } else {
      result += MARKERS[remainder]
    }
  }
  return result
}


function triangle(num) {
  for (let i = 1; i <= num ; i ++) {
    let stars = "*".repeat(i)
    console.log(stars.padStart(num, " "))
  }
}

function twice(num) {
  let strNum = String(num)
  let half = Math.ceil(strNum.length / 2)
  console.log(strNum.slice(0, half) === strNum.slice(half, strNum.length))
}


function isPalindrome(str) {
  let reverseStr = ""
  for (let i = str.length - 1; i >= 0; i --) {
    reverseStr += str[i]
  }
  return reverseStr === str
}

function isPalindromeEff(str) {
  let half = Math.ceil(str.length)
  for (let i = 0; i < half; i ++) {
    if (str[i] !== str[str.length - i]) {
      console.log([str[i], ])
      return false
    }
  }
  return true
}

console.log(isPalindromeEff('madam'))