class Game {
    constructor() {
        this.heromoves = 2;
        this.monstermoves = 0;
        this.winner = "";
        this.ended = false;
        this.players = ['hero', 'monster'];
        this.turn = 0;
    }
    player() {
        return this.players[this.turn];
    }
    move() {
        if (this.turn == 0) {
            //hero
            if (this.heromoves == 2) {
                this.heromoves--;
            } else {
                this.heromoves--;
                this.monstermoves = 1;
                this.turn = 1;
            }
        } else {
            //monster move
            this.turn = 0;
            this.heromoves = 2;
            this.monstermoves = 0;
        }
    }
    eat() {
        alert("The hero was eaten.");
        this.win("monster")
    }
    pit() {
        if (this.turn == 0) {
            alert("The hero fell into a pit.");
            this.win("monster");
        } else {
            alert("The monster fell into a pit.");
            this.win("hero");
        }
    }
    exit() {
        alert(this.player() + " found the exit.");
        this.win(this.player());
    }
    win(winner) {
        this.ended = true;
        this.winner = winner;
    }
}

let game = new Game()
