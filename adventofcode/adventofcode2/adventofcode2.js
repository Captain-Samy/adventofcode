"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// Get fileContent as a list
var fileContent = fs.readFileSync("input.txt", "utf-8").split("\n");
var writtenNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var nameChangeValues = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9"
};
// Takes an array with keyvaluepairs and returns max and min index
function getMinAndMaxIndex(keyValuePairs) {
    var maxKeyPair = keyValuePairs.reduce(function (max, current) { return (current.key > max.key ? current : max); }, keyValuePairs[0]);
    var minKeyPair = keyValuePairs.reduce(function (min, current) { return (current.key < min.key ? current : min); }, keyValuePairs[0]);
    return [{ max: maxKeyPair }, { min: minKeyPair }];
}
// takes a string and creates and array with key value pairs with the index and the written number
function indexOfNumber(str) {
    var indexAndNumber = [];
    for (var i = 0; i < writtenNumbers.length; i++) {
        var index = str.indexOf(writtenNumbers[i]);
        if (index > -1) {
            console.log("nameChangeValues[writtenNumbers[i]]: " + nameChangeValues[writtenNumbers[i]]);
            var value = writtenNumbers[i] in nameChangeValues ? nameChangeValues[writtenNumbers[i]] : writtenNumbers[i];
            indexAndNumber.push({ key: index, value: value });
        }
    }
    return indexAndNumber;
}
// function to sum up an Array
function sumUpArray(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++)
        sum += Number(numbers[i]);
    return sum;
}
//Create new list 
console.log("filecontent[0]: " + fileContent[0]);
console.log(indexOfNumber(fileContent[0]));
