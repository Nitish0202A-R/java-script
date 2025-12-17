let num = Math.floor(Math.random() * 100) + 1;

const prompt = require("prompt-sync")();

while (true) {
    userGuess = Number(prompt("Enter your guess between 1 to 100: "))

if(userGuess===num){
    console.log("correct")
    break;
}
else if(userGuess>num){
    console.log("to high")
}
else{
    console.log("to low")
}
}
// console.log(num)