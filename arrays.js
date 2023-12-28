// function rollCall(arr){
//   for (let i = 0; i < arr.length; i ++) {
//     console.log(arr[i])
//   }
// }

// function reverse(arr) {
//   result = []
//   for (let i = arr.length - 1; i >= 0 ; i--) {
//     result.push(arr[i])
//   }
//   return result
// }

// // function stringify(arr) {
// //   result = ""
// //   for (let i = 0; i < arr.length; i ++) {
// //     result += String(arr[i])
// //   }
// //   return result
// // }

// // function push(arr, elem) {
// //   arr[arr.length] = elem
// //   return arr.length
// // }

// // arr1 = [1,2,3]
// // e = 4


// // function pop(arr) {
// //   let popped = arr[arr.length - 1]
// //   arr.length = arr.length - 1
// //   return popped
// // }

// // function unshift(arr, elem) {
// //   arr.length += 1
// //   current = ""
// //   saved = elem
// //   for (let i = 0; i < arr.length; i++ ) {
// //     current = arr[i]
// //     arr[i] = saved
// //     saved = current
// //   }

// //   return arr.length
// // }

// // array = ['a','b','c']

// // function unshiftLS(arr, elem) {
// //   arr.length += 1
// //   for (let i = arr.length - 1; i > 0; i --) {
// //     arr[i] = arr[i - 1]
// //   }
// //   arr[0] = elem
// //   return arr.length
// // }



// // function shift(arr) {
// //   first_value = arr[0]
// //   for (let i = 0; i < arr.length; i ++) {
// //     array[i] = array[i + 1]
// //   }
// //   array.length = arr.length - 1
// //   return first_value
// // }
// // array = [1,2,3]
// // shift(array)


// // function indexOf(arr, elem) {
// //   for (let index = 0; index < arr.length; index ++){
// //     if (arr[index] === elem) {
// //       return index
// //     }
// //   }

// //   return -1
// // }

// // arr = [1,3,3,4]
// // elem = 2

// // function lastIndex(arr, elem) {
// //   for (let i = arr.length - 1; i >= 0; i --) {
// //     if (arr[i] === elem) {
// //       return i
// //     }
// //   }
// //   return -1
// // }

// // function slice(arr, start, end) {
// //   result = []
// //   for (let i = start; i < end; i ++){
// //     result.push(arr[i])
// //   }
// //   return result
// // }

// // function splice(arr, start, end) {
// //   result = []
// //   times = end - start
// //   while (times > 0) {
// //     push(result, arr[start])
// //     arr[start] = null
// //     for (let i = start; i < arr.length - 1; i++) {
// //       arr[i] = arr[i + 1]
// //     }
// //     arr.length--
// //     times--
// //   }

// //   return result
// // }

// // let arr2 = [0,1,2,3,4,5,6,7,8,9]

// // function concat(arr1, arr2) {
// //   result = []
// //   for (let i = 0; i < arr1.length; i ++){
// //     push(result, arr1[i])
// //   }
// //   for (let j = 0; j < arr2.length; j ++) {
// //     push(result, arr2[j])
// //   }
// //   return result
// // }

// // function join(arr, word) {
// //   result = ""
// //   for (let i = 0; i < arr.length; i ++) {
// //     if (i < arr.length - 1) {
// //     result += arr[i] + word + " "
// //     } else {
// //       result += arr[i]
// //     }
// //   }
// //   return result
// // }

// // function arraysEqual(arr1, arr2) {
// //   if (arr1.length !== arr2.length) {
// //     console.log(false)
// //     return
// //   }
// //   for (let i = 0; i < arr1.length; i ++){
// //     if (arr1[i] !== arr2[i]) {
// //       console.log(false)
// //       return
// //     }
// //   }
// //   console.log(true)
// // }

// // function firstElementOf(arr) {
// //   return arr[0]
// // }

// function lastElementOf(arr) {
//   return arr[arr.length - 1]
// }

// function nthElementOf(arr, idx) {
//   return arr[idx]
// }



// function firstNth(arr, count) {
//   if (count >= arr.length) {
//     return arr
//   }
//   result = []
//   for (let i = 0; i < count; i ++) {
//     result.push(arr[i])
//   }
//   return result
// } 

// function lastNth(arr, count) {
//   if (count >= arr.length) {
//     return arr
//   }
//   result = []
//   start = arr.length - count
//   for (let i = start; i < arr.length; i ++){
//     result.push(arr[i])
//   }
//   return result
// }

// function endOf(arr1, arr2) {
//   return [arr1[0], arr2[arr2.length - 1]]
// }

// function oddElementsOf(arr){
//   result = []
//   for (let i = 1; i < arr.length; i += 2){
//     result.push(arr[i])
//   }
//   return result
// }


// let digits = [4, 8, 15, 16, 23, 42];

// function origReverse(arr) {
//   let arrCopy = [...arr]
//   let result = arrCopy
//   for (let i = arr.length - 1; i >= 0; i --) {
//     result.push(arr[i])
//   }
//   console.log(result)
// }

// let harry = [1,2,3]

// function sortDescending(arr) {
//   return arr.slice().sort().reverse()
// }

// function sumOfArrays(arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i ++) {
//     sum = 0
//     for (let j = 0; j < arr[i].length; j ++ ) {
//       sum += arr[i][j]
//     }
//     result.push([sum])
//   }
//   return result
// }

// let hooray = [[1,2,3], [4,5,6], [-7,8,9]]

// function uniqueElements(arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i ++) {
//     if (result.includes(arr[i])) {
//       continue
//     }
//     result.push(arr[i])
//   }
//   return result
// }

// function missing(arr) {
//   let result = []
//   for (let i = 0; i < arr.length - 1; i ++) {
//     let diff = arr[i + 1] - arr[i]
//     let current = arr[i] + 1
//     while (diff > 1) {
//       result.push(current)
//       diff --
//       current ++ 
//     }
//   }
//   return result
// }


// function concat(array1, secondArgument) {
//   let result = Array.from(array1)
//   if (Array.isArray(secondArgument)) {
//     for (let i = 0; i < secondArgument.length; i ++ ) {
//       result.push(secondArgument[i])
//     }
//   }
//     else {
//       result.push(secondArgument)
//     }
//     return result
// }

// let arr11 = [1,2,3]
// let elem = {5: 6, 7:8}


//pop

function pop(arr) {
  if (arr.length === 0) {
    return undefined
  }
  let last = arr[arr.length - 1]
  arr.length = arr.length - 1
  return last
}

function push(arr, ...elems) {
  for (let i = 0; i < elems.length; i ++) {
    arr.length ++
    arr[arr.length - 1] = elems[i]
  }
  return arr.length
}

function reverse(maybe) {
  let result = []
  if (typeof maybe === 'string') {
    result = ""
    for (let i = maybe.length - 1; i >= 0; i --) {
      result += maybe[i]
    }
  } else {
    for (let i = maybe.length - 1; i >= 0; i --) {
      result.push(maybe[i])
    }
  }
  
  return result
}

function shift(arr) {
  if (arr.length === 0) {
    return undefined
  }
  let first = arr[0]
  for (let i = 0; i < arr.length - 1; i ++){
    arr[i] = arr[i + 1]
  }
  arr.length--
  return first
}

let arr = [1,2,3,4,5]

function unshift(arr, ...elems) {
  for (let i = 0; i < elems.length; i ++) {
    arr.length++
    for (let j = arr.length - 1; j > 0; j --) {
      arr[j] = arr[j - 1]
    }
    arr[0] = elems[i]
  }

  return arr.length
}


//slice and splice

function mySlice(arr, begin, end) {
  if (typeof begin !== 'number' || typeof end !== 'number') {
    return undefined
  }
  let newArr = []
  for (let i = begin; i < end; i ++) {
    newArr.push(arr[i])
  }
  return newArr
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(false)
    return
  }
  let arr1Sorted = array1.slice().sort()
  let arr2Sorted = array2.slice().sort()
  console.log([arr1Sorted, arr2Sorted])
  for (let i = 0; i < arr1Sorted.length; i ++) {
    if (arr1Sorted[i] !== arr2Sorted[i]) {
      console.log(false)
      return
    }
  }
  console.log(true)
}













