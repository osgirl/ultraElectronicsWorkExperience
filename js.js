var noughtOrCross = {
    nought: "nought",
    cross: "cross"
};

var rows = ["", "", ""]; var x;
var columns = ["", "", ""]; var y;

var grid = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
] 

var occupied = true;
var state;
var isGame = false;

function onClick(obj) {
    coordinates(obj);
    checkOccupied();
    if (isGame == true && this.occupied == false) {
        if (this.state == noughtOrCross.nought) {
            obj.innerHTML = "<img src='nought.png' height='200px' width='200px'/>";
            this.state = noughtOrCross.cross;

            rows[x - 1] = "nought"; columns[y - 1] = "nought";
        }
        else {
            obj.innerHTML = "<img src='cross.png' height ='200px' width='200px'/>";
            this.state = noughtOrCross.nought;

            rows[x - 1] = "cross"; columns[y - 1] = "cross";
        }
    }
    occupied = true;
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
    y = objID / 3; y = Math.ceil(y);
    x = objID - (y * 3); x += 3;
}

function checkOccupied() {
    if(rows[this.x] == "" && columns[this.y] == ""){
        this.occupied = false;
    }
}