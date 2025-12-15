let num=[10,20,30,40,50]
let b=num.toString()  // b is a string
console.log(b , typeof b)
let c=num.join("$") // join use to join array value with any symbol
console.log(c , typeof c)
num.pop() // remove last element from arrray use by pop
 console.log(num) 
// let r=num.pop() // r is removent element in array
// console.log(num,r) // num is array after pop and r is removed element

// let r=num.push(60) // add new element to array use by puch
//  console.log(num,r) // num is array after puch and r is new lenght of array

// let r=num.shift() // removr fist element from array use by shift
// console.log(num,r)// num is array after shift and r is removend emelement

let r=num.unshift(10) // add new element to first index use by unshift
console.log(num,r) // num is array after unshift and r is new lenght of array
delete num[3] // delete use to delete any index value but lenght is same
console.log(num) // num is array after delete