var snake, apple, squareSize, score, speed,
    updateDelay, direction, new_direction,
    addNew, cursors, scoreTextValue, speedTextValue, 
    textStyle_Key, textStyle_Value, asteroidX, asteroidY;

var Game = {

    preload : function() {
        // Here we load all the needed resources for the level.
        // In our case, that's just two squares - one for the snake body and one for the apple.
       
        game.load.image('dinosprites 1', './assets/images/dinosprites 1.gif');
        game.load.image('Asteroid', './assets/images/Asteroid.gif');
        game.load.image('Earth', './assets/images/Earth.gif');
    },

    create : function() {

        // enable physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.input.mouse.capture = true

        // By setting up global variables in the create function, we initialise them on game start.
        // We need them to be globally available so that the update function can alter them.

        // snake = [];                     // This will work as a stack, containing the parts of our snake
        // apple = {};                     // An object for the apple;
        // squareSize = 15;                // The length of a side of the squares. Our image is 15x15 pixels.
        // score = 0;                      // Game score.
        dinospeed = 200;
        updateDelay = 0;
        speed = 50
        shottimer = 0
        
        // A variable for control over update rates.
        // direction = 'right';            // The direction of our snake.
        // new_direction = null;           // A buffer to store the new direction into.
        // addNew = false;                 // A variable used when an apple has been eaten.

        // // Set up a Phaser controller for keyboard input.
        // cursors = game.input.keyboard.createCursorKeys();

        // game.stage.backgroundColor = '#061f27';



      

        Earth = game.add.sprite(241, 237, 'Earth');
        //dinosprites = game.add.sprite(400, 400, 'dinosprites 1');

        dino = game.add.group();
        dino.enableBody = true;

        asteroid = game.add.group();
        asteroid.enableBody = true;

        var incommingAsteroid = asteroid.create(0,0, 'Asteroid');
        incommingAsteroid.body.velocity.x = 100;
        incommingAsteroid.body.velocity.y = 100;

       



        

        // Generate the initial snake stack. Our snake will be 10 elements long.
        // Beginning at X=150 Y=150 and increasing the X on every iteration.
        // for(var i = 0; i < 10; i++){
        //     snake[i] = game.add.sprite(150+i*squareSize, 150, 'snake');  // Parameters are (X coordinate, Y coordinate, image)
        // }


        // // Genereate the first apple.
        // this.generateApple();


        // // Add Text to top of game.
        // textStyle_Key = { font: "bold 14px sans-serif", fill: "#46c0f9", align: "center" };
        // textStyle_Value = { font: "bold 18px sans-serif", fill: "#fff", align: "center" };

        // // Score.
        // game.add.text(30, 20, "SCORE", textStyle_Key);
        // scoreTextValue = game.add.text(90, 18, score.toString(), textStyle_Value);
        // // Speed.
        // game.add.text(500, 20, "SPEED", textStyle_Key);
        // speedTextValue = game.add.text(558, 18, speed.toString(), textStyle_Value);

    },




    update: function() {

        game.input.mouse.capture = true


        // Handle arrow key presses, while not allowing illegal direction changes that will kill the player.

        // if (cursors.right.isDown && direction!='left')
        // {
        //     new_direction = 'right';
        // }
        // else if (cursors.left.isDown && direction!='right')
        // {
        //     new_direction = 'left';
        // }
        // else if (cursors.up.isDown && direction!='down')
        // {
        //     new_direction = 'up';
        // }
        // else if (cursors.down.isDown && direction!='up')
        // {
        //     new_direction = 'down';
        // }


        // // A formula to calculate game speed based on the score.
        // // The higher the score, the higher the game speed, with a maximum of 10;
        // speed = Math.min(10, Math.floor(score/5));
        // // Update speed value on game screen.
        // speedTextValue.text = '' + speed;

        // // Since the update function of Phaser has an update rate of around 60 FPS,
        // // we need to slow that down make the game playable.

        // Increase a counter on every update call.
        updateDelay++;

        if (Game.input.activePointer.isDown && shottimer == 0) {
            shottimer = 3;
            var dinoProjectile = dino.create(400, 400, 'dinosprites 1');
            dinoProjectile.inputEnabled = true;
            game.physics.arcade.moveToPointer(dinoProjectile, dinospeed, game.input.activePointer);
        }


        // // Do game stuff only if the counter is aliquot to (10 - the game speed).
        // // The higher the speed, the more frequently this is fulfilled,
        // // making the snake move faster.
        if (updateDelay % (speed) == 0 && shottimer > 0) {
            shottimer --;
            game.debug.text('Shot timer = ' + shottimer,16,16,'#FFFFFF');


         



            // if (asteroidX < 368 && asteroidY < 368){
            //     asteroidX++;
            //     asteroidY++;

            //     textStyle_Key = { font: "bold 14px sans-serif", fill: "#46c0f9", align: "center" };
            //     game.add.text(10, 10, "Leo is stinky", textStyle_Key);

            //     Asteroid.kill();
            //     Asteroid = game.add.sprite(asteroidX, asteroidY, 'Asteroid');
                


            //}


            //     // Snake movement

            //     var firstCell = snake[snake.length - 1],
            //         lastCell = snake.shift(),
            //         oldLastCellx = lastCell.x,
            //         oldLastCelly = lastCell.y;

            //     // If a new direction has been chosen from the keyboard, make it the direction of the snake now.
            //     if(new_direction){
            //         direction = new_direction;
            //         new_direction = null;
            //     }


            //     // Change the last cell's coordinates relative to the head of the snake, according to the direction.

            //     if(direction == 'right'){

            //         lastCell.x = firstCell.x + 15;
            //         lastCell.y = firstCell.y;
            //     }
            //     else if(direction == 'left'){
            //         lastCell.x = firstCell.x - 15;
            //         lastCell.y = firstCell.y;
            //     }
            //     else if(direction == 'up'){
            //         lastCell.x = firstCell.x;
            //         lastCell.y = firstCell.y - 15;
            //     }
            //     else if(direction == 'down'){
            //         lastCell.x = firstCell.x;
            //         lastCell.y = firstCell.y + 15;
            //     }


            //     // Place the last cell in the front of the stack.
            //     // Mark it the first cell.

            //     snake.push(lastCell);
            //     firstCell = lastCell;

        }


        
    },


    generateApple: function(){

        // Chose a random place on the grid.
        // X is between 0 and 585 (39*15)
        // Y is between 0 and 435 (29*15)

        var randomX = Math.floor(Math.random() * 40 ) * squareSize,
            randomY = Math.floor(Math.random() * 30 ) * squareSize;

        // Add a new apple.
        apple = game.add.sprite(randomX, randomY, 'apple');
    }

};

/* Notes:

At the moment the Dino has a trail that probably has to do with the click
length so make a delay in between time you can fire. Also find
out a way to have the Dino move the same way the mouse is in relation to the
Earth and not the top left at (0,0)

*/