//Score object has a board that contains all Players and their scores. Everytime a Player join any Game, he will be added to the board.
//all Players' scores will be stored at only one place - ScoreBoard object.


class Score{
    constructor(){
        this.board = []; //this se refiere al objeto global, ya sea en modo estricto o no
        // guarda un array no definido
        //array objetos tipo lista
    }
    join(name){ //The join() method returns the array as a string.

        //The elements will be separated by a specified separator. The default separator is comma (,).

        this.board.push({
            name,
            scores: 0
        });
    }
    leave(name){
        this.board = this.board.filter(player => player.name !== name);
    }
   
    update(name, scores){
        const playerId = this.board.findIndex(player => player.name === name);
        if(playerId > -1){
            this.board[playerId].scores += scores;
        }
    }

    showScores(){
        return this.board;
    }
    getWinner(){
        return this.sort()[0];
    }
    sort(){
        return this.board.sort((p1, p2) => p2.scores - p1.scores);
    }
}


module.exports = { Score }