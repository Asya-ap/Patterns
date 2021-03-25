

const Score = require('./score.js');

class Player{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    win(scores){
        Score.update(this.name, scores);
    }
    lose(scores){
        Score.update(this.name, -scores);
    }
}

module.exports = { Player }