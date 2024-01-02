class Game {
    constructor(){
        this.players=['hero','monster'];
        this.turn=0;
        this.heromoves = 2;
        this.monstermoves = 0;
        this.winner = "";
        this.ended = false;
    }
    player(){
        return this.players[this.turn];
    }
    move(){
        if (this.turn == 0){
            //hero
            if (this.heromoves == 2){ 
                this.heromoves--;
            } else {
                this.heromoves--;
                this.monstermoves = 1;
                this.turn = 1;
            }
        } else {
            //monster move
            this.turn = 0;
            this.heromoves=2;
            this.monstermoves = 0;
        }
        this.displayStats();
    }
    eat(){
        alert("The hero was eaten.");
        this.win("monster")
    }
    pit(){
        if (this.turn == 0){
            alert("The hero fell into a pit.");
            this.win("monster");
        } else {
            alert("The monster fell into a pit.");
            this.win("hero");
        }
    }
    exit(){
        alert(this.player() + " found the exit.");
        this.win(this.player());
    }
    win(winner){
        this.ended = true;
        this.winner = winner;
        let message = document.querySelector("#winner ." + winner);
        if (message){
            message.style.display = "block";
        }
    }
    displayStats(){
        if (this.turn == 0){
            document.getElementById("herostats").classList.add('turn');
            document.getElementById("monsterstats").classList.remove('turn');
        } else {
            document.getElementById("herostats").classList.remove('turn');
            document.getElementById("monsterstats").classList.add('turn');
        }
        document.querySelector("#herostats .movescount").textContent = this.heromoves;
        document.querySelector("#monsterstats .movescount").textContent = this.monstermoves;
    }
}

let game = new Game()
