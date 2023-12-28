function multiplesOf3And5() {
  for (let i = 3; i <= 100 ; i ++){
    if (i % 15 == 0) {
      console.log(String(i) + "!")
    } else if (i % 3 == 0 || i % 5 == 0) {
      console.log(String(i))
    }
  }
}

function logMultiples(num) {
  endMultiple = Math.floor(100 / num)
  endMultiple % 2 === 1 ? endMultiple : endMultiple -= 1


  for (let i = endMultiple; i * num >= num; i --) {
    if ((i * num) % 2 === 1) {
    console.log(num * i)
    }
  }
}

function isPrime(num){
  for (let i = 2; i <= num/2; i ++){
    if (num % i === 0){
      return false
    }
  }
  return true
}

function xor(bool1, bool2) {
  bool1 ? console.log(!bool2) : console.log(bool2)
}

function gcd(num1, num2) {
  for(let i = num2; i > 0; i --){
    if (num1 % i === 0 && num2 % i === 0){
      console.log(i)
      break
    }
  }
}
console.log(typeof null)

