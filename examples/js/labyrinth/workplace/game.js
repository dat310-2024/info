class Game {
    constructor(){
        this.heromoves = 2;
        this.monstermoves = 0;
        this.turn = 0;
        this.players = ["monster", "hero"];
        this.winner = "";
        this.finished = false;
    }
    player() { 
        // return player 
    }
    move(){ 
        // register move
    }
    eat(){ 
        //monster wins 
    }
    pit(){ 
        //player looses 
    }
    exit(){ 
        //player wins 
    }
    win(winner){ 
        //set winner 
    }
}

let game = new Game()