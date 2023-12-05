import * as fs from "fs";

interface KeyValuePair {
  key: number;
  value: string;
}

// Get fileContent as a list
const fileContent = fs.readFileSync("input.txt", "utf-8").split("\n");

const writtenNumbers: string[] = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const nameChangeValues:{} = {
  "one": "1",
  "two": "2",
  "three":"3",
  "four":"4",
  "five": "5",
  "six": "6",
  "seven": "7",
  "eight": "8",
  "nine":"9"
}
// Takes an array with keyvaluepairs and returns max and min index
function getMinAndMaxIndex(keyValuePairs: [KeyValuePair]) {
  const maxKeyPair = keyValuePairs.reduce((max, current) => (current.key > max.key ? current : max), keyValuePairs[0]);
  const minKeyPair = keyValuePairs.reduce((min, current) => (current.key < min.key ? current : min), keyValuePairs[0]);
return [{max: maxKeyPair},{min: minKeyPair}]
}
// takes a string and creates and array with key value pairs with the index and the written number
function indexesOfNumbers(str: string){
  let indexAndNumber = []
  let counter = 0
  for(let i = 0; i < writtenNumbers.length; i++){
    var index = str.indexOf(writtenNumbers[i])
    while (index > -1 && index < str.length){
      console.log("nameChangeValues[writtenNumbers[i]]: " + nameChangeValues[writtenNumbers[i]])
      const writtenNumber = writtenNumbers[i] in nameChangeValues ? nameChangeValues[writtenNumbers[i]] : writtenNumbers[i]
      indexAndNumber.push({key: counter, value: {index : index, writtenNumber: writtenNumber}})
      counter++
      index = str.indexOf(writtenNumbers[i], index+1)
    }
  }
  return indexAndNumber
}

// function to sum up an Array
function sumUpArray(numbers: Array<string>){
  var sum = 0
  for (let i = 0; i < numbers.length; i++ ) 
    sum += Number(numbers[i]);
  return sum
}

//Create new list 
console.log("filecontent[0]: " + fileContent[0])
console.log(indexesOfNumbers(fileContent[0]))