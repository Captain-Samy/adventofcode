import * as fs from "fs";

interface cubeConfiguration {
    redCubes: number,
    greenCubes: number,
    blueCubes: number
}

interface cubes {
    color:string
}
interface drawnCubes{
    drawnCubes: cubes[]
}

interface game{
    gameIndex: number;
    draws: drawnCubes[]
}

type parseableGameList = game[];


// Get fileContent as a list
const fileContent = fs.readFileSync("input.txt", "utf-8").split("\n");

function createParseableData(gameList: Array<string>){
    let parseableGameList = []
    let regexNumberOfDraw = /\d/g
    let regexColorOfDraw = /\d+\s*(\w+)/

    // loop through every game
    for (let i = 0; i < gameList.length; i++){
        //split game ID and Draws
        let splittedGame = gameList[i].split(":")
        //get gameIndex through regex
        let gameIndex = Number(splittedGame[0].match(/\d/g)?.join(""))
        var pushableDrawList = []

        let listOfDraws = splittedGame[1].split(";")
        for (let x = 0; x < listOfDraws.length; x++){
            var pushableColorSplittedList = []
            let listColorSplitted = listOfDraws[x].split(",")
            for (let c = 0; c < listColorSplitted.length; c ++){
                let numberOfDraw = Number(listColorSplitted[c].match(regexNumberOfDraw)?.join(""))
                let colorOfDraw = listColorSplitted[c].match(regexColorOfDraw)?.[1]
                if(colorOfDraw === "red"){
                    pushableColorSplittedList.push({red: numberOfDraw})
                }
                if(colorOfDraw === "blue"){
                    pushableColorSplittedList.push({blue: numberOfDraw})
                }
                if (colorOfDraw === "green"){
                    pushableColorSplittedList.push({green: numberOfDraw})
                }
            }
            pushableDrawList.push(pushableColorSplittedList)
        }
        parseableGameList.push({gameIndex: gameIndex, draws: pushableDrawList})
    }
    return parseableGameList
}


const parseAbleData = createParseableData(fileContent)
console.log(JSON.stringify(parseAbleData[1]))


