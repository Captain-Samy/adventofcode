import * as fs from "fs";
console.log("test")

// Get fileContent as a list
const fileContent = fs.readFileSync("input.txt", "utf-8").split("\n");

//regex to recognize numbers
const regex = /\d/g;

// get first and last digit from a string
function findFirstAndLastDigit(str: string):string {
    const digits = str.match(regex);
    if (digits && digits.length > 0) {
      const firstDigit = digits[0];
      const lastDigit = digits[digits.length - 1];
      const combined = firstDigit + lastDigit
      return combined;
    } else{
      return ""
    }
  }

// function to sum up an Array
function sumUpArray(numbers: Array<string>){
  var sum = 0
  for (let i = 0; i < numbers.length; i++ ) 
    sum += Number(numbers[i]);
  return sum
}

//Create new list 
const numbers: Array<string> = fileContent.map(findFirstAndLastDigit);
const solution = sumUpArray(numbers)

console.log(solution)
console.log("test")