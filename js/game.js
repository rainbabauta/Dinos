var snake, apple, squareSize, score, speed,
    updateDelay, direction, new_direction,
    addNew, cursors, scoreTextValue, speedTextValue, 
    textStyle_Key, textStyle_Value, asteroidX, asteroidY;

var Game = {

    preload : function() {
               
        game.load.image('dinosprites 1', './assets/images/dinosprites 1.gif');
        game.load.image('Asteroid', './assets/images/Asteroid.gif');
        game.load.image('Earth', './assets/images/Earth.gif');
    },

    create : function() {

        // enable physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // makes the game detect the mouse... I think
        game.input.mouse.capture = true

        //
        dinospeed = 200;
        updateDelay = 0;
        speed = 50
        shottimer = 0

        //Earth centered based on its pixel size
        Earth = game.add.sprite(game.world.centerX - (318/2), game.world.centerY - (325/2), 'Earth');

        dino = game.add.group();
        dino.enableBody = true;

        asteroid = game.add.group();
        asteroid.enableBody = true;

        var incommingAsteroid = asteroid.create(0,0, 'Asteroid');
        incommingAsteroid.body.velocity.x = 100;
        incommingAsteroid.body.velocity.y = 100;
    },

    update: function() {

        game.input.mouse.capture = true

        updateDelay++;

        //checks for when mouse is pushed and if the shot timer is 0, shoots dino to the mouse
        if (Game.input.activePointer.isDown && shottimer == 0) {
            shottimer = 3;
            var dinoProjectile = dino.create(game.world.centerX - (33/2), game.world.centerY - (38/2), 'dinosprites 1');
            dinoProjectile.inputEnabled = true;
            game.physics.arcade.moveToPointer(dinoProjectile, dinospeed, game.input.activePointer);
        }

        //updates every 1 second (if speed is 10)
        if (updateDelay % (speed) == 0 && shottimer > 0) {
            shottimer --;
            game.debug.text('Shot timer = ' + shottimer,16,16,'#FFFFFF');
        }
    },
};

/* Notes:

At the moment the Dino has a trail that probably has to do with the click
length so make a delay in between time you can fire. Also find
out a way to have the Dino move the same way the mouse is in relation to the
Earth and not the top left at (0,0)

*/