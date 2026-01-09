// for loop in array
let num=[25,26,27,28,29]
// for(let i=0;i<num.length;i++){// num.ka shat hamsa lenght ka usa kra ha 
//     console.log(num[i])
// }
// forEach loop
// num.forEach((Element)=>{ 
//     console.log(Element+Element) // Agar tum element * element print karte ho, to har number ka square print hoga
// })

let name="nitish"
let arr = Array.from(name)
console.log(arr);


// for of loop
for(let i of num){ 
    console.log(i)  // num number short number
}



// for in loop
for(let item in num){ // short cut ha ya for loop ka
    console.log(item)
}
