// Opdrachtomschrijving:
// Voor onze maandelijkse ‘Thirsty Thursdays’ willen we pizza’s bestellen alleen is er een probleem! 
// De bezorger is onderweg alleen zijn navigatie is kapot gegaan waardoor hij niet meer weet waar hij is, het enige dat 
// hij weet is dat hij in de buurt moet zijn. Daarom stapt hij af van zijn scooter om de route te bepalen.
// Hij weet van voorgaande ritten nog dat je alleen op het ​wegen-raster​ van de stad kunt rijden en dat als hij 
// onderweg een bord met bijvoorbeeld ​R6​ tegenkomt hij 90 graden rechtsaf moet slaan en vervolgens 6​ ​ blokken verder moet rijden. 
// Hetzelfde geldt voor een bord met bijvoorbeeld L​ 4​, dan moet hij 90 graden links afslaan en vervolgens ​4 blokken verder moet rijden.

// Bereken hoeveel blokken de bezorger momenteel verwijderd is van Angi Studio.
// Voorbeeld:

// ● Stel je komt de volgende borden tegen ​["R",2]​ en L​ 3 ​dit resulteert erin dat je 2
// blokken oost bent verwijderd en 3 noord, wat resulteert in een totaal van ​5
// blokken​.



// ● ["L",2], ["L",2], ["L",2] ​betekent dat je zuid 2​ blokken​ bent verwijderd van je
// startpositie.
// ● ["R",5], ["L",5], ["R",5], R3​ is 1​ 2 blokken​.
// Borden die je onderweg tegenkomt:



// directionInputArray = [["R",2], ["L",3], ["R",2], ["R",4], ["L",2], ["L",1], ["R",2], ["R",4], ["R",1], ["L",4], ["L",5], ["R",5], ["R",5], ["R",2], ["R",2], ["R",1], ["L",2],["L",3], ["L",2],
// ["L",1], ["R",3], ["L",5], ["R",187], ["R",1], ["R",4], ["L",1], ["R",5], ["L",3], ["L",4], ["R",50], ["L",4], ["R",2],["R",70], ["L",3], ["L",2], ["R",4], ["R",3],
// ["R",194] ,["L",3], ["L",4], ["L",4], ["L",3], ["L",4], ["R",4], ["R",5], ["L",1], ["L",5], ["L",4], ["R",1], ["L",2], ["R",4], ["L",5], ["L",3], ["R",4], ["L",5], ["L",5],
// ["R",5], ["R",3], ["R",5], ["L",2], ["L",4], ["R",4], ["L",1], ["R",3], ["R",1], ["L",1], ["L",2], ["R",2], ["R",2], ["L",3], ["R",3], ["R",2], ["R",5], ["R",2], ["R",5],
// ["L",3], ["R",2], ["L",5], ["R",1], ["R",2], ["R",2], ["L",4], ["L",5], ["L",1], ["L",4], ["R",4], ["R",3], ["R",1], ["R",2], ["L",1], ["L",2], ["R",4], ["R",5], ["L",2],
// ["R",3], ["L",4], ["L",5], ["L",5], ["L",4], ["R",4], ["L",2], ["R",1], ["R",1], ["L",2], ["L",3], ["L",2], ["R",2], ["L",4], ["R",3], ["R",2], ["L",1], ["L",3], ["L",2],
// ["L",4], ["L",4], ["R",2], ["L",3], ["L",3], ["R",2], ["L",4], ["L",3], ["R",4], ["R",3], ["L",2], ["L",1], ["L",4], ["R",4], ["R",2], ["L",4], ["L",4], ["L",5], ["L",1],
// ["R",2], ["L",5], ["L",2], ["L",3], ["R",2], ["L",2]]
//  -------------------------Preparation--------------------------------------------------------------------------

// drie inputs nodig: 

// 1 current-direction (N) (E) (S) (W)
// 2 new-direction (R,2) ---- calculated (N), (E), (S), (W) + number
// 3 current-position (x,y)

// moet loopen/map/itereren

// let currentPosition = [0,0];

// let newDirection = [["L",2],["L",2]]

// when direction is (N) and position is (0,0) and new input is ["L",3] : (W)  (-3, 0) in if statements

// * bereken de huidige richting van enkele value met if/switch statement
// * bereken de huidige richting van array
// * bereken de coordinaat veranderingen met if statement
// * itereer met 'huidige richting' en de nieuwe coordinaten, de nieuwe coordinaten
// * laatste coordinaten optellen voor kortste route




/////////////////////------------------getting newdirection------------------///////////////////
// let newDirection = 0;
// let directionInput = ["0", 6];
// let currentDirection = "E";

function getNewDirection(directionInput, currentDirection){
//   console.log(directionInput[0])
    switch(directionInput[0] + currentDirection) {
        case "L" + "N":
            newDirection = "W";
        break;
        case "L" + "W":
            newDirection = "S";
        break;
        case "L" + "S":
            newDirection = "E";
        break;
        case "L" + "E":
            newDirection = "N";
        break;
        case "R" + "N":
            newDirection = "E";
        break;
        case "R" + "E":
            newDirection = "S";
        break; 
        case "R" + "S":
            newDirection = "W";
        break;
        case "R" + "W":
            newDirection = "N";
        break;
        default:
            newDirection = 'N';
    }
    return newDirection
}

console.log("getNewDirection must be N   " + getNewDirection(["L", 6], "E"))// "N"


////////////////////---------------getNewDirections from input Array


let directionInputArray = [["R",2], ["L",3], ["R",2], ["R",4], ["L",2], ["L",1], ["R",2], ["R",4], ["R",1], ["L",4], ["L",5], ["R",5], ["R",5], ["R",2], ["R",2], ["R",1], ["L",2],["L",3], ["L",2],
["L",1], ["R",3], ["L",5], ["R",187], ["R",1], ["R",4], ["L",1], ["R",5], ["L",3], ["L",4], ["R",50], ["L",4], ["R",2],["R",70], ["L",3], ["L",2], ["R",4], ["R",3],
["R",194] ,["L",3], ["L",4], ["L",4], ["L",3], ["L",4], ["R",4], ["R",5], ["L",1], ["L",5], ["L",4], ["R",1], ["L",2], ["R",4], ["L",5], ["L",3], ["R",4], ["L",5], ["L",5],
["R",5], ["R",3], ["R",5], ["L",2], ["L",4], ["R",4], ["L",1], ["R",3], ["R",1], ["L",1], ["L",2], ["R",2], ["R",2], ["L",3], ["R",3], ["R",2], ["R",5], ["R",2], ["R",5],
["L",3], ["R",2], ["L",5], ["R",1], ["R",2], ["R",2], ["L",4], ["L",5], ["L",1], ["L",4], ["R",4], ["R",3], ["R",1], ["R",2], ["L",1], ["L",2], ["R",4], ["R",5], ["L",2],
["R",3], ["L",4], ["L",5], ["L",5], ["L",4], ["R",4], ["L",2], ["R",1], ["R",1], ["L",2], ["L",3], ["L",2], ["R",2], ["L",4], ["R",3], ["R",2], ["L",1], ["L",3], ["L",2],
["L",4], ["L",4], ["R",2], ["L",3], ["L",3], ["R",2], ["L",4], ["L",3], ["R",4], ["R",3], ["L",2], ["L",1], ["L",4], ["R",4], ["R",2], ["L",4], ["L",4], ["L",5], ["L",1],
["R",2], ["L",5], ["L",2], ["L",3], ["R",2], ["L",2]];
console.log(directionInputArray, 'directionInputArray')//(4) [Array(2), Array(2), Array(2), Array(2)]


let newDirections = // newDirection wordt ingezet bij elke nieuwe iteratie. Output: array van [directionInput en newDirection]
    directionInputArray.map(x => [ x[0], x[1],getNewDirection(x, newDirection) ])
 

/////////////////////------------------getting newPosition------------------///////////////////

// inputs: directionInput, currentDirection, currentPosition
let currentPosition = [0,0];
// let directionInput = ["R", 1];


function getNewPosition(currentPosition, newDirections){
    if (newDirections[2] === "N"){
        //if newDirection is North then x ax stays 0 and Y ax goes inputpoints up
        currentPosition[0] = (currentPosition[0] + 0)
        currentPosition[1] = (currentPosition[1] + newDirections[1]) 
    } else if(newDirections[2] === "E") {
        currentPosition[0] = (currentPosition[0] + newDirections[1]) 
        currentPosition[1] = (currentPosition[1] + 0) 
    } else if(newDirections[2] === "S"){
        currentPosition[0] = (currentPosition[0] + 0) 
        currentPosition[1] = (currentPosition[1] - newDirections[1])  
    } else if(newDirections[2] === "W"){
        currentPosition[0] = (currentPosition[0] - newDirections[1])
        currentPosition[1] = (currentPosition[1] + 0)  
    } else { 
        return "N"}
    return [currentPosition[0], currentPosition[1]];
}

////////////////-------------------getting array of all new positions--------------------///////////

let newPositions = newDirections.map(x => [getNewPosition(currentPosition, x)]) //Output array of currentPositions

///////////////--------------------check yourself before you wreck yourself--------------------

// console.log("getNewPosition" + getNewPosition([0,0], ["R", 2, "E"]))// [2,12]
console.log("newPostions: " + newPositions)
// console.log('newDirections', newDirections)
// console.log('newDirection', newDirection)

/////////////---------------------Final distance--------------------------------/////////////

let lastCoordinates = (newPositions.slice(-1)[0])

let finalDistance = (lastCoordinates[0]) + (lastCoordinates[1])
console.log("FINALDISTANCE" + finalDistance)
// console.log("lastNewPosition: " + newPositions.slice(-1)[0])// -123,-123


