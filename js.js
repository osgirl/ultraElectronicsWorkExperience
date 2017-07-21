var noughtOrCross = {
    nought: "nought",
    cross: "cross"
};

var x;
var y;

var grid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

var winner;
var occupied;
var state;
var gamecount = 0;
var isGame = true;  //set to false later
var gameOver = false;

function onClick(obj) {
    coordinates(obj);
    checkOccupied();
    if (isGame == true && occupied == false && gameOver == false) {
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
        var winDown = checkDown();
        var winAcross = checkAcross();
        var winDiagonal = checkDiagonal();
        gameCount();
    }
    if (winDown == true || winAcross == true || winDiagonal == true) {
        alert("The winner is " + winner + "!");
        resetBoard();
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

function checkDown() {
    for (i = 0; i < grid.length; i++) {
        if (grid[i][x - 1] != grid[0][x - 1]) {
            return false;
            break;
        };
    }
    if (grid[0][x - 1] == "x") {
        winner = "Crosses";
    }
    else {
        winner = "noughts";
    }
    return true;
}

function checkAcross() {
    for (i = 0; i < grid.length; i++) {
        if (grid[y - 1][i] != grid[y - 1][0]) {
            return false;
            break;
        }
    }
    if (grid[y - 1][0] == "x") {
        winner = "Crosses";
    }
    else {
        winner = "noughts";
    }
    return true;
}

function checkDiagonal() {
    if (grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2] && grid[0][0] == grid[2][2] && grid[1][1] != "") {
        if (grid[1][1] == "x") {
            winner = "crosses";
        }
        else {
            this.winner = "noughts";
        }
        return true;
    }
    else if (grid[2][0] == grid[1][1] && grid[1][1] == grid[0][2] && grid[2][0] == grid[0][2] && grid[1][1] != "") {
        if (grid[1][1] == "x") {
            winner = "crosses";
        }
        else {
            winner = "noughts";
        }
        return true;
    }
    else {
        return false;
    }
}

function gameCount() {
    gamecount++;
    if (gamecount >= 9 && winner == null) {
        gameOver = true;
        on();
        document.getElementById("image").innerHTML = "<img align='middle' src='http://cdn5.thr.com/sites/default/files/2011/06/nicolas_cage_2011_a_p.jpg'/>";
        resetBoard();
    }
}


function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function resetBoard() {
    for (i = 1; i < 10; i++) {
        document.getElementById("div_" + i).innerHTML = "";
    }
    grid = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
    gamecount = 0;
    gameOver = false;
    winner = null;
}