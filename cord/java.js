// ==============================
//   NITISH UTILITY TOOL (JS)
// ==============================

function showMenu() {
    console.log("\n==============================");
    console.log("      NITISH JS TOOL");
    console.log("==============================");
    console.log("1. Add Two Numbers");
    console.log("2. Check Even or Odd");
    console.log("3. Find Factorial");
    console.log("4. Generate Multiplication Table");
    console.log("5. Check Prime Number");
    console.log("6. Generate Random Password");
    console.log("7. Exit");
    console.log("==============================\n");
}

function addNumbers(a, b) {
    return a + b;
}

function evenOdd(n) {
    return n % 2 === 0 ? "Even Number" : "Odd Number";
}

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

function multiplicationTable(n) {
    let table = "";
    for (let i = 1; i <= 10; i++) {
        table += `${n} x ${i} = ${n * i}\n`;
    }
    return table;
}

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function generatePassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!";
    let pass = "";
    for (let i = 0; i < length; i++) {
        pass += chars[Math.floor(Math.random() * chars.length)];
    }
    return pass;
}

// ============= MAIN PROGRAM =============

let running = true;

while (running) {
    showMenu();

    let choice = Number(prompt("Enter your choice: "));

    switch (choice) {
        case 1:
            let a = Number(prompt("Enter first number: "));
            let b = Number(prompt("Enter second number: "));
            console.log("Result =", addNumbers(a, b));
            break;

        case 2:
            let n1 = Number(prompt("Enter a number: "));
            console.log("Result:", evenOdd(n1));
            break;

        case 3:
            let n2 = Number(prompt("Enter number for factorial: "));
            console.log("Factorial =", factorial(n2));
            break;

        case 4:
            let n3 = Number(prompt("Enter number for table: "));
            console.log(multiplicationTable(n3));
            break;

        case 5:
            let n4 = Number(prompt("Enter number to check prime: "));
            console.log(isPrime(n4) ? "Prime Number" : "Not Prime");
            break;

        case 6:
            let len = Number(prompt("Password length: "));
            console.log("Generated Password =", generatePassword(len));
            break;

        case 7:
            console.log("Exiting... Thank you Nitish!");
            running = false;
            break;

        default:
            console.log("Invalid choice! Try again.");
    }
}
