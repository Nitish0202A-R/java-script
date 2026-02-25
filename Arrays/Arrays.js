// let student = {
//   name: "Nitish",
//   age: 22,
//   city: "Delhi",
//   acchray: function(){
// console.log("hello i am nitish kumar")
//   }
// };

// console.log(student);
// student.acchray();
// console.log(typeof(student))


// const arr=[1,2,3,4,5,6]
// console name=[Nitish , 2,()]
// console.log(arr)



// const nam = ['nitish',1,true]
// nam.push('ROHIT')
// nam.push('40')
// nam.push('60')
// // nam.pop(40)
// // nam.pop(70)
// // nam.shift()
// // nam.unshift('nitish')
// console.log(nam.slice(1,3) )
// // console.log(nam)


// map

// const sq=[30,40,50,60]
// const ans=sq.map((number)=>{
//   return number*number  
// })

// console.log(ans)


// const arr = [1,2,3,4]

// const ans = arr.map(num => num+2)

// console.log(ans)


// const arr=[1,2,3,4]
// const nam=arr.map((num)=>{
//     return num*2
// })
// console.log(nam)


// const arr=[1,2,3,4,5]

// arr.map((number)=>{
//     console.log(number*2)
// })



//Q 1️⃣ [1,2,3,4] → sabka square karo


// const arr=[1,2,3,4]

// arr.map((number)=>{
//     console.log(number*2)
// })


// Q [10,20,30] → sabme +10 add karo


// const arr=[10,20,30]
// arr.map((number)=>{
//     console.log(number+10)
// })

// Q 3️⃣ ["a","b","c"] → sabko uppercase karo


// const arr=["a","b","c"]
// const ans=arr.map(function(letter){
//     return letter.toUpperCase()
// })
// console.log(ans)

// Q Q5️⃣ Numbers ka square karo



// const sq=[2,3,4]
// const ans=sq.map((number)=>{
//     return number*number
// })
// console.log(ans)


// Q4️⃣ Names ke aage "Mr " add karo


// const add=["nitish","rohit"]
// const ans=add.map(function(n){
//     return " Mr " + n;
// })
// console.log(ans)


// const muli=[1,2,3,4]
// const ans =muli.map((n)=>{
//     return n*3
// })
// console.log(ans)




// Q1️⃣

// 👉 [1,5,8,2,10]
// 👉 sirf >5 wale numbers lo


// const less=[1,5,8,2,10]
// const ans=less.filter((number)=>{
//     return number >5
// })

// console.log(ans)


// Q2️⃣

// 👉 [10,20,3,7,50]
// 👉 sirf <15 wale numbers lo


// const ge=[10,20,3,7,50]
// const ans=ge.filter((number)=>{
//     return number<15
// })
// console.log(ans)



// Q3️⃣

// 👉 [2,4,5,7,8,9]
// 👉 sirf even numbers lo


// const even= [2,4,5,7,8,9]
// const ans=even.filter((number)=>{
//     return number%2===0
// })

// console.log(ans)



// Q4️⃣

// 👉 [15,30,4,9,100]
// 👉 sirf 10 se bade numbers lo


const num=[15,30,4,9,100]
const ans=num.filter((number)=>{
    return number>10
})

console.log(ans)