"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
console.log("test");
// Get fileContent as a list
var fileContent = fs.readFileSync("input.txt", "utf-8").split("\n");
//regex to recognize numbers
var regex = /\d/g;
// get first and last digit from a string
function findFirstAndLastDigit(str) {
    var digits = str.match(regex);
    if (digits && digits.length > 0) {
        var firstDigit = digits[0];
        var lastDigit = digits[digits.length - 1];
        var combined = firstDigit + lastDigit;
        return combined;
    }
    else {
        return "";
    }
}
function sumUpArray(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++)
        sum += Number(numbers[i]);
    return sum;
}
//Create new list 
var numbers = fileContent.map(findFirstAndLastDigit);
var solution = sumUpArray(numbers);
console.log(solution);
