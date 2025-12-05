// // 40 < super hot , 30 < hot , 20 < warm , 10 < cold , 10 > super cold

// let temp=59
// if(temp>40){
//     console.log("super hot")
// }
// else if(temp>30&&temp<40){
//     console.log("hot")
// }
// else if(temp>20&&temp<30){
//     console.log("warm")
// }
// else if(temp>10 && temp < 20){
//     console.log("cold")
// }
// else{
//     console.log("super cold")
// }

// marks ≥ 90 → A+

// marks ≥ 80 → A

// marks ≥ 70 → B

// marks ≥ 60 → C

// marks ≥ 33 → D

// marks < 33 → Fail
let marks = 22;
if (marks >= 90) {
  console.log("A+");
} else if (marks >= 80 && marks < 90) {
  console.log("A");
} else if (marks >= 70 && marks < 80) {
  console.log("B");
} else if (marks >= 60 && marks < 70) {
  console.log("C");
} else if (marks >= 33 && marks < 60) {
  console.log("D");
} else {
  console.log("fail");
}
