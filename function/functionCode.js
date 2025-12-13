// 👉 Step 1: Function Define (Banana)
function averageOfTwoNumbers(number1, number2) {
    
    //  Step 2: Dono numbers ka sum nikalo
    let sum = number1 + number2;

    //  Step 3: Average ka formula
    let average = sum / 2

    //  Step 4: Ek message banake return kar do
    let resultMessage = 
        "Numbers: " + number1 + " and " + number2 + 
        "\nSum = " + sum + 
        "\nAverage = " + average;

    return resultMessage;  //  output
}

// Step 5: Variables declare
let A = 2;
let B = 5;
let C = 6;

//  Step 6: Function ko call karna
console.log("---- A & B ----");
console.log(averageOfTwoNumbers(A, B))
console.log("\n");

console.log("---- B & C ----");
console.log(averageOfTwoNumbers(B, C))
console.log("\n");

console.log("---- C & A ----");
console.log(averageOfTwoNumbers(C, A))
