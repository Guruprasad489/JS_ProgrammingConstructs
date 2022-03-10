//1. Random Function to get Single Digit number
console.log("Single digit number: "+ Math.floor(Math.random() * 10));

//2. Use Random to get Dice Number between 1 to 6
console.log("Dice Number: " + Math.floor(1 + Math.random()*6)+1);

//3. Add two Random Dice Number and Print the Result
let num1 = Math.floor(Math.random() * 6) + 1;
let num2 = Math.floor(Math.random() * 6) + 1;
let sum = (num1) + (num2)
console.log("Number1: "+num1 +", Number2: "+num2);
console.log("\nAddition of two random numbers " +sum);

//4. Write a program that reads 5 Random 2 Digit values ,then find their sum and the average
const arr = new Array(5);
sum =0;
for(let i =0; i< arr.length; i++){
    arr[i] = Math.floor(Math.random() * 90) + 10;
    console.log("Number"+(i+1)+" is "+arr[i]);
    sum += arr[i];
}
let avg = sum/arr.length;
console.log("Total sum: "+sum);
console.log("Total average: "+avg);

