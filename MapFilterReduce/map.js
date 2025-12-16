 // array map methor
 
 
 let naam=[15,18,16,13]
let a= naam.map((Element,index,array)=>{  // new array banata hai // is ma hum element,index,array va use kra ha aur singl v use kar sakta ha 
    console.log(Element,index,array)
    return Element+1 // har element me 1 add karke naya array bana raha hai

})
console.log(a)



//Q1. map() kya return karta hai?

//ans- Ek naya array return karta hai.

// Q2. Kya map() original array ko change karta hai?

// ans- Nahi, original array same rehta hai.

// Q3. map() aur forEach() me difference kya hai?

// Ans-(1) map() new array banata hai
// (2) forEach() sirf loop chalata hai

//Q4. map() me return na likhen to kya hoga?

// Ans-New array me undefined aa jayega

// Q5.map() ka use kab karte hain?

// Ans-Jab array ke har element ko modify karke naya array chahiye

// Q6. map() ka syntax kya hai?
// Ans-array.map((element, index, array) => {
//     return value;
// });
