
//Now we create Game object with different Player objects to join the game. Each Player win and lose his scores in separated games.

//Notice that we use new keyword for creating Game, so Game is not a Singleton, this allows us to create many Game objects.

const Score = require('./score');
const Game = require('./Game');
const Player = require('./player');

const Agame = new Game('A-game');
const Bgame = new Game('B-game');
const asya = new Player('Asya');
const jonathan = new Player('Jonathan');

asya.win(10);
asya.lose(5);

jonathan.win(15);
jonathan.lose(3);

console.log(Agame.getName());
console.log(Bgame.getName());
console.log('scores:', Score.showScores());
console.log(`winner: ${Score.getWinner().name}, score: ${Score.getWinner().scores}`);