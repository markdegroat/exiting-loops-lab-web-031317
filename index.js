function breakOut(array, changeValue, stopValue){
  for (let i = 0, l = array.length; i < l; i++){
    if(array[i] === stopValue){
      break
    }
    array[i] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for (let i = 0, l = array.length; i < l; i++){
    if(array[i] === skipValue){
      continue
    }
    array[i] = changeValue
  }
  return array
}

function findBy(array, findFn){
  for (let i = 0, l = array.length; i < l; i++){
    if(findFn(array[i])){
      return array[i]
    }
  }
  return null
}

// array = [1,2,3,4,5,6,7,8]
// let num = findBy(array, (n) => n == 9)
// console.log(num)
