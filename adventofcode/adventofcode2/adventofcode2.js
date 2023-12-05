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
    var maxIndex = -1;
    var minIndex = 1000000;
    var maxNumber = "";
    var minNumber = "";
    console.log("test");
    console.log(keyValuePairs);
    for (var i = 0; i < keyValuePairs.length; i++) {
        if (keyValuePairs[i].value.index > maxIndex) {
            maxIndex = keyValuePairs[i].value.index;
            console.log("maxIndex: " + maxIndex);
            maxNumber = keyValuePairs[i].value.writtenNumber;
            console.log("maxNumber: " + maxNumber);
        }
        if (keyValuePairs[i].value.index < minIndex) {
            minIndex = keyValuePairs[i].value.index;
            console.log("minIndex: " + minIndex);
            minNumber = keyValuePairs[i].value.writtenNumber;
            console.log("minNumber: " + minNumber);
        }
    }
    var result = minNumber + maxNumber;
    return result;
}
// takes a string and creates and array with key value pairs with the index and the written number
function indexesOfNumbers(str) {
    var counter = 0;
    var indexAndNumber = [];
    for (var i = 0; i < writtenNumbers.length; i++) {
        var index = str.indexOf(writtenNumbers[i]);
        while (index > -1 && index < str.length) {
            var writtenNumber = writtenNumbers[i] in nameChangeValues ? nameChangeValues[writtenNumbers[i]] : writtenNumbers[i];
            indexAndNumber.push({ key: counter, value: { index: index, writtenNumber: writtenNumber } });
            counter++;
            index = str.indexOf(writtenNumbers[i], index + 1);
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
console.log(indexesOfNumbers(fileContent[0]));
console.log(getMinAndMaxIndex(indexesOfNumbers(fileContent[0])));
function createlistToSumUp(fileContent) {
    var listToSum = [];
    for (var i = 0; i < fileContent.length; i++) {
        var numberToPush = getMinAndMaxIndex(indexesOfNumbers(fileContent[i]));
        listToSum.push(numberToPush);
    }
    return listToSum;
}
var listToSumUp = createlistToSumUp(fileContent);
console.log(listToSumUp);
console.log(sumUpArray(listToSumUp));
