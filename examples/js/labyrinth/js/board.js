class Field{
    constructor(type, element){
        let types = ['wall', 'free', 'exit', 'pit'];
        if (types.indexOf(type) == -1){
            console.log("Created field with wrong type")
        }
        this.type = type // 'wall','free', 'exit', or 'pit'
        this.hidden = true;
        this.hero = false;
        this.monster = false;
        this.element = element;
        this.settype();
        this.element.classList.add('hidden');
    }
    settype(){
        this.element.classList.remove('wall');
        this.element.classList.remove('exit');
        this.element.classList.remove('pit');
        this.element.classList.remove('hero');
        this.element.classList.remove('monster');
        if (this.type == 'wall' || this.type == 'exit' || this.type == 'pit'){
            this.element.classList.add(this.type);
        }
    }
    show(){
        this.hidden = false;
        this.element.classList.remove('hidden');
    }
    set(player){
        this[player]=true;
        this.element.classList.remove('hidden');
        this.element.classList.add(player);
    }
    unset(player){
        this[player]=false;
        this.element.classList.remove(player);
    }
}

const board1 = 
    ['free','free','wall','wall','wall','free',
     'wall','free','free','free','wall','free',
     'wall','free','wall','free','free','free',
     'wall','free','wall','wall','wall','exit',
     'wall','free','pit','free','wall','free'];
const board2 = 
     ['free','free','wall','pit','wall','free',
      'wall','free','free','free','free','free',
      'free','free','wall','free','wall','free',
      'free','wall','wall','free','wall','exit',
      'free','free','free','free','free','free'];
const board3 = 
      ['free','free','wall','pit','free','free',
       'wall','free','wall','free','wall','free',
       'free','free','free','free','free','free',
       'free','wall','wall','free','wall','free',
       'free','exit','free','free','wall','free'];

function getRandomBoard(){
    // randomly pick 0, 1 or 2
    let r = Math.floor(Math.random()*3)
    // use r to pick a board
    let boards =[board1,board2,board3]
    return boards[r];
}

function generatefields(){
    let fields = [];
    let layout = getRandomBoard();

    let fieldelements = document.getElementsByClassName("field");
    if (fieldelements.length != layout.length){
        throw `Layout does not fit to page: 
                ${fieldelements.length} field in html and 
                ${layout.length} fields in layout.` 
    }
    
    for (let i=0; i<layout.length; i++){
        fields.push(new Field(layout[i], fieldelements[i]));
    }
    return fields;
}

class Board{
    constructor(){
        this.heroXY = [0,0];    // x,y coordinates of hero
        this.monsterXY = [5,0]; // x,y coordinates of monster
        this.xmax=5;// x ranges from 0 to 5
        this.ymax=4;// y ranges from 0 to 4
        this.fields = [];
    }
    getXY(player){
        if (player == 'hero'){ return this.heroXY};
        return this.monsterXY;
    }
    start(){
        this.fields = generatefields();
        this.setplayer(0,0,'hero');    // default start position
        this.setplayer(5,0,'monster'); // default start position
    }
    hasField(x,y){
        if (x < 0 || x > this.xmax || y < 0 || y > this.ymax){
            return false;
        }
        return true;
    }
    getField(x,y){
        if (!this.hasField(x,y)){
            throw "Field outside of board"
        }
        return this.fields[y*6+x];
    }
    setplayer(x,y,player){
        console.log(`move ${player} to (${x},${y})`);
        let next = this.getField(x,y)
        next.set(player);
        this[player+'XY']=[x,y];
        
        if (this.heroXY[0] == this.monsterXY[0] && 
            this.heroXY[1] == this.monsterXY[1]){
            game.eat();
        }

        if (next.type == "pit"){
            game.pit(player)
        }
        if (next.type == "exit"){
            game.exit(player)
        } 

    }
    trymove(x,y,player){
        if (game.ended){
            return;
        }
        if (player != game.player() ){
            return;
        }
        
        if (this.hasField(x,y)){
            let next = this.getField(x,y);
            next.show();
            if (next.type == 'wall'){
                console.log("wall");
                game.move();
                return;
            }
            let oldXY = this.getXY(player);
            this.getField(oldXY[0],oldXY[1]).unset(player);
            this.setplayer(x,y,player);
        }
        game.move();
    }
    moveright(player){
        let xy = this.getXY(player);
        this.trymove(xy[0]+1,xy[1],player);
    }
    moveleft(player){
        let xy = this.getXY(player);
        this.trymove(xy[0]-1,xy[1],player);
    }
    moveup(player){
        let xy = this.getXY(player);
        this.trymove(xy[0],xy[1]-1,player);
    }
    movedown(player){
        let xy = this.getXY(player);
        this.trymove(xy[0],xy[1]+1,player);
    }
}

let board = new Board();

function keyhandle(event) {
    switch (event.keyCode) {
        case 37: // left
            board.moveleft('hero');
            break;
        case 38: // up
            board.moveup('hero');
            break;
        case 39: // right
            board.moveright('hero');
            break;
        case 40: // down
            board.movedown('hero');
            break;
        case 65: // left
            board.moveleft('monster');
            break;
        case 87: // up
            board.moveup('monster');
            break;
        case 68: // right
            board.moveright('monster');
            break;
        case 83: // down
            board.movedown('monster');
            break;
        default: // any other key
            // do nothing
            console.log(event.keyCode);
            break;
    }
}

window.onload = function() {
    board.start();
    document.body.addEventListener("keyup", keyhandle);
}