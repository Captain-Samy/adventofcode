import * as fs from "fs";

interface KeyValuePair {
  key: number;
  value: string;
}

interface valueWrittenNumberPair{
  index: number;
  writtenNumber: string;
}
interface indexAndNumber {
  key: number;
  value: valueWrittenNumberPair
}

type indexAndNumberPair = indexAndNumber[]

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
function getMinAndMaxIndex(keyValuePairs: indexAndNumberPair) {
  var maxIndex = -1
  var minIndex = 1000000
  var maxNumber = ""
  var minNumber = ""
  console.log("test")
  console.log(keyValuePairs)

  for (let i = 0; i < keyValuePairs.length; i++){
    if (keyValuePairs[i].value.index > maxIndex){
      maxIndex = keyValuePairs[i].value.index
      console.log("maxIndex: " + maxIndex)
      maxNumber = keyValuePairs[i].value.writtenNumber
      console.log("maxNumber: " + maxNumber)
    }
    if (keyValuePairs[i].value.index < minIndex){
      minIndex = keyValuePairs[i].value.index
      console.log("minIndex: " + minIndex)
      minNumber = keyValuePairs[i].value.writtenNumber
      console.log("minNumber: " + minNumber)
    }
  }
  let result = minNumber + maxNumber
  return result
}
// takes a string and creates and array with key value pairs with the index and the written number
function indexesOfNumbers(str: string){
  let counter = 0
  let indexAndNumber = []
  for(let i = 0; i < writtenNumbers.length; i++){
    var index = str.indexOf(writtenNumbers[i])
    while (index > -1 && index < str.length){
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
console.log(getMinAndMaxIndex(indexesOfNumbers(fileContent[0])))

function createlistToSumUp(fileContent: Array<string>): Array<string> {
  var listToSum = []
  for (let i = 0; i < fileContent.length; i++){
    var numberToPush = getMinAndMaxIndex(indexesOfNumbers(fileContent[i]))
    listToSum.push(numberToPush)
  }
  return listToSum
}
const listToSumUp = createlistToSumUp(fileContent)
console.log(listToSumUp)
console.log(sumUpArray(listToSumUp))
