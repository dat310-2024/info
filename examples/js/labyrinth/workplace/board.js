class Field {
    constructor(type) {
        let types = ['wall', 'free', 'exit', 'pit'];
        if (types.indexOf(type) == -1) {
            console.log("Created field with wrong type")
        }
        this.type = type // 'wall','free', 'exit', or 'pit'
        this.hidden = true;
        this.hero = false;
        this.monster = false;
    }
    show() {
        //not hidden
    }
    set(player) {
        // not hidden and player
    }
    unset(player) {
        // not player
    }
}

const board1 =
    ['free', 'free', 'wall', 'wall', 'wall', 'free',
        'wall', 'free', 'free', 'free', 'wall', 'free',
        'wall', 'free', 'wall', 'free', 'free', 'free',
        'wall', 'free', 'wall', 'wall', 'wall', 'exit',
        'wall', 'free', 'pit', 'free', 'wall', 'free'];
const board2 =
    ['free', 'free', 'wall', 'pit', 'wall', 'free',
        'wall', 'free', 'free', 'free', 'free', 'free',
        'free', 'free', 'wall', 'free', 'wall', 'free',
        'free', 'wall', 'wall', 'free', 'wall', 'exit',
        'free', 'free', 'free', 'free', 'free', 'free'];
const board3 =
    ['free', 'free', 'wall', 'pit', 'free', 'free',
        'wall', 'free', 'wall', 'free', 'wall', 'free',
        'free', 'free', 'free', 'free', 'free', 'free',
        'free', 'wall', 'wall', 'free', 'wall', 'free',
        'free', 'exit', 'free', 'free', 'wall', 'free'];

function getRandomBoard() {
    // randomly pick 0, 1 or 2
    let r = Math.floor(Math.random() * 3)
    // use r to pick a board
    let boards = [board1, board2, board3]
    return boards[r];
}

function generatefields() {
    // take a random board and generate an array of field objects
}

class Board {
    constructor(game) {
        this.heroXY = [0, 0];    // x,y coordinates of hero
        this.monsterXY = [5, 0]; // x,y coordinates of monster
        this.xmax = 5;// x ranges from 0 to 5
        this.ymax = 4;// y ranges from 0 to 4
        this.fields = [];
        this.game = game;
    }
    getXY(player) {
        // return heroXY or monsterXY
    }
    start() {
        // generate fields and set hero and monster to start positions
    }
    hasField(x, y) {
        // check if a position is outside of the board
    }
    getField(x, y) {
        if (!this.hasField(x, y)) {
            throw "Field outside of board"
        }
        // return correct field object
    }
    setplayer(x, y, player) {
        // set player to coordinate x,y
        // trigger game effects, eat(), pit(), exit()
    }
    trymove(x, y, player) {
        // check for wall and turn. 
        // use game to check if players turn
        // register game move
    }
    moveright(player) {
        // x+1
    }
    moveleft(player) {
        // x-1
    }
    moveup(player) {
        // y+1
    }
    movedown(player) {
        // y-1
    }
}

let board = new Board(game);

function keyhandle(event) {
    switch (event.keyCode) {
        default: // any other key
            // do nothing
            console.log(event.keyCode);
            break;
    }
}

window.onload = function () {
    document.body.addEventListener("keyup", keyhandle);
}