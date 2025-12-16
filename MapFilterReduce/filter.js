// array filter methor
let arr=[15,45,26,9,5,10,4,2]
let a2 = arr.filter((a)=>{  // new array banata hai jo condition ko pura karta hai
    return a<10;

})
console.log(a2)




// Q1. filter() kya return karta hai?

// Ans- Ek naya array

// Q2. Kya filter() original array ko change karta hai?

// Ans-  Nahi

// Q3. filter() ka use kab hota hai?

// Ans- Jab condition ke base par data chahiye

// Q4. filter() me return na likhen to?

// Ans- Empty array [] milta hai

// Q5. filter() ka syntax kya hai?
// Ans-array.filter((element) => condition);

// Q6. filter() aur map() me difference?

// Ans(1) filter() select karta hai
// (2) map() change karta hai