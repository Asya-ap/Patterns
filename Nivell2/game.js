//Singleton is object that can have only a single, unique instance, with a single point of access.


const score = require('./score.js');

class Game{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    join(player){
        score.join(player.getName());
    }
}

module.exports = { Game }