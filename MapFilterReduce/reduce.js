// array reduce methor
let naam2=[5,10,15,21]
let a3=naam2.reduce((h1,h2)=>{
    return h1+h2
})
console.log(a3)



// Q1. reduce() kya return karta hai?

// Ans- Ek single value

// Q2. reduce() ka use kab hota hai?

// Ans- Jab array se ek result chahiye

// Q3. reduce() me accumulator kya hota hai?

// Ans- Wo variable jo final result store karta hai

// Q4. Initial value na den to kya hoga?

// Ans- First element acc ban jata hai

// Q5. reduce() vs map()
// ANS-(1)reduce	map
// (2) single value	new array
// (3) combine	transform
// Q6. Sum nikalne ka short code
// Ans-let sum = [1,2,3].reduce((a,b)=>a+b,0);