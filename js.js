var noughtOrCross = {
    nought: "nought",
    cross: "cross"
};

var x;
var y;

var grid = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
]

var occupied;
var state;
var gamecount = 0;
var isGame = true;  //set to false later
var gameOver = false;

function onClick(obj) {
    coordinates(obj);
    checkOccupied();
    if (isGame == true && this.occupied == false && gameOver == false) {
        if (this.state == noughtOrCross.nought) {

            obj.innerHTML = "<img src='nought.png' height='200px' width='200px'/>";
            this.state = noughtOrCross.cross;

            grid[y - 1][x - 1] = "o";
        }
        else {
            obj.innerHTML = "<img src='cross.png' height ='200px' width='200px'/>";
            this.state = noughtOrCross.nought;

            grid[y - 1][x - 1] = "x";
        }
    }
    else{
        alert("Game is Over");
    }
    gamecount++;
    if (gamecount >= 9) {
        gameOver = true;
    }
}

function startGame(obj) {
    obj.visibility = 'hidden';
    var stateNum = Math.random();
    if (stateNum > 0.5) {
        this.state = noughtOrCross.nought;
    }
    else {
        this.state = noughtOrCross.cross;
    }
    isGame = true;
}

function coordinates(obj) {
    objID = obj.id.split("_").pop();
    this.y = objID / 3; y = Math.ceil(y);
    this.x = objID - (y * 3); x += 3;
}

function checkOccupied() {
    if (grid[y - 1][x - 1] == "") {
        occupied = false;
    }
    else {
        occupied = true;
    }
}