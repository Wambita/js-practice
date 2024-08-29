function indexOf(arr, val, b = 0) {
    if (b  > arr.length - 1) {
        b = 0
    }
for (var i = b; i < arr.length; i++) {
    if (arr[i] === val) {
        return i
}
}
return -1
}


function lastIndexOf(arr, val, b = 0) {
    if (b  > arr.length - 1) {
        b = arr.length - 1
    }
for (var i =b; i >= 0; i--) {
    if (arr[i] === val) {
        return i
}
}
return -1
}


function includes(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true
    }
}
return false
}

//console.log(lastIndexOf([t, 0, 0, t], t, 2))
// console.log(indexOf(['b', 'arr', ' a', 'arr', ], 'arr'))
// console.log(indexOf(['b', 'arr', ' a', 'arr', ], 'arr', 2))
// console.log(lastIndexOf(['b', 'arr', ' a', 'arr', ], 'arr'))
// console.log(lastIndexOf(['b', 'arr', ' a', 'arr', ], 'arr', 2))
// console.log(includes(['b', 'arr', ' a', 'arr', ], 'arr'))
// console.log(lastIndexOf(['b', 'arr', ' a', 'arr', ], 'c'))
