let heightMark, weightMark;
let heightJohn, weightJohn;

heightMark = 1.69;
weightMark = 78;

heightJohn = 1.95;
weightJohn = 92;

let bmiMark = weightMark / heightMark ** 2;
let bmiJohn = weightJohn / heightJohn ** 2;

console.log(bmiMark, bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;

console.log(markHigherBMI);
