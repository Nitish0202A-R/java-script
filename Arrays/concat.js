// let num=[1,2,3,4,5,6,7,8,9]
// let num_a=[10,11,12,13,14,15]
// let r=num.concat(num_a) // concat use to join two array 
// console.log(r) // r is new array after conact 
// console.log(num ,num_a) // num and num_a is same no cahnge


// let num=[1,2,3,4,5,6,7,8,9]
// let num_a=[10,11,12,13,14,15]
// let num_b=[160,170,180,190,200] // new array num_b
// let r=num.concat(num_a ,num_b) // concat use to join two array 
// console.log(r) // r is new array after conact 
// console.log(num ,num_a) // num and num_a is same no cahnge


// short method
// let num=[155,25,45,120,65]  // compara ascii value 
// num.sort((a,b)=>a-b) // shot method use to shart array in ascending order
// console.log(num)
// let num=[155,25,45,120,65]
// num.sort() // sort method use oringianl array in short form kara raha ha 
// console.log(num)


// slice and splice method
// let num =[10,20,30,40,50,60,70,80,90]
// num.splice(2,4,200,400,500,600)  // splice use to remove and add new element in array
// console.log(num)

let num=[10,20,30,40,50,60,70,80,90]
let newNum=num.slice(4) // slice use to create new array from existing array
// num.slice(2,4)
console.log(newNum) // newNum is new array after slice

//delete method

// let num =[10,20,30,40,50,60,70,80,90]
// let deleteValues=num.splice(2,4,200,400,500,600)  // it is use to delete value and retura the value
// console.log(deleteValues)

// let num =[10,20,30,40,50,60,70,80,90]
// let deleteValues=num.splice(2,4,200,400,500,600)  // it is use to delete value and retura the value
// console.log(typeof deleteValues) // typeof of delete value is object because it is array
