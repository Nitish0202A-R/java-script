//Q1
// let a = [1, 2, 3, 4, 5,7,83]
// let b = 6
// let num= Number.parseInt(b)
// a.push(b)
// console.log(a)
 


// Q2
//  let a = [1, 2, 3, 4, 5, 7, 83];
// let b = 5;
// let i = 0;

// do {
//     a.push(b);
//     i++;
// } while (i < 1);

// console.log(a);
 //Q3
 let a=[1,30,40,56,80,96,45]
 let b=a.filter((x)=>{
    return x%2==0
 })
 console.log(b)
    //Q4
    let a1=[1,2,3,4,5,6,7,8,9]
    let b1=a1.map((x)=>{
        console.log(x)
        return x*x
    })
    console.log(b1)

    //Q5
    let a2=[1,2,3,4,5]
    let b2=a2.reduce((h1,h2)=>{
        return h1+h2
    })
    console.log(b2)