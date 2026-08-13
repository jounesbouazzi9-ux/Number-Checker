function isPositiv (number){
 if (number > 0){
    return true
 }
 return false
}
function isNegativ (number){
 if (number < 0){
    return true
 }
  return false
}
function isZero (number){
 if (number == 0){
    return true
 }
  return false
}
function isEven (number){
 if (number % 2 === 0){
    return true
 }
  return false
}
function describeNumber (number){
    let result
    if(isPositiv(number)){
        result = "positive"
    }else if 
        (isNegativ(number)){
        result = "negative"
    }else if
        (isZero(number)){
        result = "zero"
    }else{
        (isEven(number))
        result = "even"
    }
    return result
}

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));