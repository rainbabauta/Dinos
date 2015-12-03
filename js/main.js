var game;

// Create a new game instance 800px wide and 800px tall:
game = new Phaser.Game(800, 800, Phaser.AUTO, '');

// First parameter is how our state will be called.
// Second parameter is an object containing the needed methods for state functionality
game.state.add('Menu', Menu);


// Adding the Game state.
game.state.add('Game', Game);

game.state.start('Menu');