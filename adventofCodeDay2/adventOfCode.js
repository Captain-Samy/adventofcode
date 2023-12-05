"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// Get fileContent as a list
var fileContent = fs.readFileSync("input.txt", "utf-8").split("\n");
function createParseableData(gameList) {
    var _a, _b, _c;
    var parseableGameList = [];
    var regexNumberOfDraw = /\d/g;
    var regexColorOfDraw = /\d+\s*(\w+)/;
    // loop through every game
    for (var i = 0; i < gameList.length; i++) {
        //split game ID and Draws
        var splittedGame = gameList[i].split(":");
        //get gameIndex through regex
        var gameIndex = Number((_a = splittedGame[0].match(/\d/g)) === null || _a === void 0 ? void 0 : _a.join(""));
        var pushableDrawList = [];
        var listOfDraws = splittedGame[1].split(";");
        for (var x = 0; x < listOfDraws.length; x++) {
            var pushableColorSplittedList = [];
            var listColorSplitted = listOfDraws[x].split(",");
            for (var c = 0; c < listColorSplitted.length; c++) {
                var numberOfDraw = Number((_b = listColorSplitted[c].match(regexNumberOfDraw)) === null || _b === void 0 ? void 0 : _b.join(""));
                var colorOfDraw = (_c = listColorSplitted[c].match(regexColorOfDraw)) === null || _c === void 0 ? void 0 : _c[1];
                if (colorOfDraw === "red") {
                    pushableColorSplittedList.push({ red: numberOfDraw });
                }
                if (colorOfDraw === "blue") {
                    pushableColorSplittedList.push({ blue: numberOfDraw });
                }
                if (colorOfDraw === "green") {
                    pushableColorSplittedList.push({ green: numberOfDraw });
                }
            }
            pushableDrawList.push(pushableColorSplittedList);
        }
        parseableGameList.push({ gameIndex: gameIndex, draws: pushableDrawList });
    }
    return parseableGameList;
}
var parseAbleData = createParseableData(fileContent);
console.log(JSON.stringify(parseAbleData[1]));
