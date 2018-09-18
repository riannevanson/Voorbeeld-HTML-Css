console.log('hi')

// Opdrachtomschrijving:
// Voor onze maandelijkse ‘Thirsty Thursdays’ willen we pizza’s bestellen alleen is er een probleem! 
// De bezorger is onderweg alleen zijn navigatie is kapot gegaan waardoor hij niet meer weet waar hij is, het enige dat 
// hij weet is dat hij in de buurt moet zijn. Daarom stapt hij af van zijn scooter om de route te bepalen.
// Hij weet van voorgaande ritten nog dat je alleen op het ​wegen-raster​ van de stad kunt rijden en dat als hij 
// onderweg een bord met bijvoorbeeld ​R6​ tegenkomt hij 90 graden rechtsaf moet slaan en vervolgens 6​ ​ blokken verder moet rijden. 
// Hetzelfde geldt voor een bord met bijvoorbeeld L​ 4​, dan moet hij 90 graden links afslaan en vervolgens ​4 blokken verder moet rijden.

// Bereken hoeveel blokken de bezorger momenteel verwijderd is van Angi Studio.
// Voorbeeld:

// drie inputs nodig: 

// 1 current-direction (N) (E) (S) (W)
// 2 new-direction (R,2) ---- calculated (N), (E), (S), (W) + number
// 3 current-position (x,y)

//moet loopen tot 

// let currentPosition = [0,0];

// let newDirection = [["L",2],["L",2]]

// when direction is (N) and position is (0,0) and new input is L3 : (W)  (-3, 0)

// cases/if- statements 

// reduce, door alles bij elkaar op tellen

/////////////////////------------------getting newdirection------------------///////////////////
// let newDirection = 0;
let directionInput = ["0", 6];
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
            newDirection = 'no Direction';
    }
    return newDirection
}


console.log("getNewDirection" + getNewDirection(["L", 6], "E"))// "N"

// inputs: directionInput, currentDirection, currentPosition


/////////////////////------------------getting newdirection------------------///////////////////
let currentPosition = [2,6]
directionInput = ["L", 6];


function getNewPosition(currentPosition, newDirection, directionInput){
    if (newDirection === "N"){
        currentPosition[0] = (currentPosition[0] + 0)
        currentPosition[1] = (currentPosition[1] + directionInput[1]) 
    } else if(newDirection === "E") {
        currentPosition[0] = (currentPosition[0] + directionInput[1]) 
        currentPosition[1] = (currentPosition[1] + 0) 
    } else if(newDirection === "S"){
        currentPosition[0] = (currentPosition[0] + 0) 
        currentPosition[1] = (currentPosition[1] - directionInput[1])  
    } else if(newDirection === "W"){
        currentPosition[0] = (currentPosition[0] - directionInput[1])
        currentPosition[1] = (currentPosition[1] + 0)  
    } else { 
        return "wrong newDirection"}
    return [currentPosition[0], currentPosition[1]];
}

console.log("getNewPosition" + getNewPosition(currentPosition, newDirection, directionInput))// [2,12]


let directionInputArray = [["R",2]];
// eerst directionInputArray[0] + currentDirection + currentPosition --> current direction wordt newDirection
// daarna directionInputArray[0] + currentDirection + currentPosition
// 

console.log(currentPosition + "currentPosition")

let mapGetNewDirection = [["R",2]].map(x => 
    getNewDirection(x, 'S')
    
)

console.log('mapGetNewDirection', mapGetNewDirection)

console.log('test   ' + getNewDirection(["R",2], 'W'))



// ● Stel je komt de volgende borden tegen ​R2​ en L​ 3 ​dit resulteert erin dat je 2
// blokken oost bent verwijderd en 3 noord, wat resulteert in een totaal van ​5
// blokken​.



// ● L2, L2, L2 ​betekent dat je zuid 2​ blokken​ bent verwijderd van je
// startpositie.
// ● R5, L5, R5, R3​ is 1​ 2 blokken​.
// Borden die je onderweg tegenkomt:
// R2, L3, R2, R4, L2, L1, R2, R4, R1, L4, L5, R5, R5, R2, R2, R1, L2, L3, L2,
// L1, R3, L5, R187, R1, R4, L1, R5, L3, L4, R50, L4, R2, R70, L3, L2, R4, R3,
// R194, L3, L4, L4, L3, L4, R4, R5, L1, L5, L4, R1, L2, R4, L5, L3, R4, L5, L5,
// R5, R3, R5, L2, L4, R4, L1, R3, R1, L1, L2, R2, R2, L3, R3, R2, R5, R2, R5,
// L3, R2, L5, R1, R2, R2, L4, L5, L1, L4, R4, R3, R1, R2, L1, L2, R4, R5, L2,
// R3, L4, L5, L5, L4, R4, L2, R1, R1, L2, L3, L2, R2, L4, R3, R2, L1, L3, L2,
// L4, L4, R2, L3, L3, R2, L4, L3, R4, R3, L2, L1, L4, R4, R2, L4, L4, L5, L1,
// R2, L5, L2, L3, R2, L2