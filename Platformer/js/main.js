var game= new Phaser.Game(928, 793, Phaser.AUTO, '', {preload: preload, create: create, update: update});

var cursors;

function preload(){
    game.load.image('background', 'assets/environment/forest_background.png');
    game.load.image('ground', 'assets/environment/forest_ground');
    game.load.image('platform', 'assets/envoronment/forest_platform');
    game.load.image('player1', 'assets/characters/mainplayer.png');
}

function create(){
    game.stage.backgroundImage = 'background';
    game.physics.startSystem(Phaser.Physics.ARCADE);
    players = game.add.group();
    players.enableBody = true;
    createPlayer(0,0);
    platforms = game.add.group();
    platforms.enableBody = true;
    createPlatform();
    cursors = game.input.keyboard.createCursorKeys();
}

function update(){
    playerUpdate();
}

function createPlayer(Player1){
    var player1 = players.create(x,y, 'mplayer1');
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 700;
    player.body.collideWorldBounds = true;
}

function playerUpdate(){
    
    //Enabling Physics
    game.physics.ARCADE.collide(players, players);
    game.physics.ARCADE.collide(players, platforms);
    players.forplayer1(function(p){
        p.body.velocity.x = 0;
        
        //Player Controls X-Axis
        if(cursor.A.isDown){
            p.body.velocity.x = -50;
        }  else if(cursors.D.isDown){
            p.body.velocity.x = 50;
        }
        
        // Jump Controls
        if(cursors.W.isDown && p.body.touching.down){
            p.body.velocity.y = -50;
        }
    });
}

function createPlatform(){
    for(var i = 0; < game.world.width;i+=64)
    var ground = platforms.create(i, 200, 'platform');
    ground.body.immovable = true;
}