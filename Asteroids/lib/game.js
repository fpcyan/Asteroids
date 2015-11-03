(function () {
  if (typeof(window.Asteroids) === "undefined") {
    window.Asteroids = {};
  };



  var Game = Asteroids.Game = function() {
    this.asteroids = [];
    this.addAsteroids();
    this.ship = this.buildShip();
  };

  Game.DIM_X = 600
  Game.DIM_Y = 600
  Game.NUM_ASTEROIDS = 5

  Game.prototype.randomPosition = function () {
    var posX = Math.floor(Math.random() * Game.DIM_X);
    var posY = Math.floor(Math.random() * Game.DIM_Y);
    return [posX, posY];
  }

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      var pos = this.randomPosition();
      var asteroid = new Asteroids.Asteroid(this, pos);
      this.asteroids.push(asteroid);
    }
  };

  Game.prototype.buildShip = function() {
    var pos = this.randomPosition();
    var ship = new Asteroids.Ship(this, pos);
    return ship;
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    var objects = this.allObjects();

    objects.forEach(function (obj) {
      obj.draw(ctx);
    });
  };

  Game.prototype.allObjects = function () {
    return this.asteroids.concat([this.ship]);
  };

  Game.prototype.moveObjects = function () {
    var objects = this.allObjects();
    objects.forEach(function (obj) {
      obj.move();
    });
  };

  Game.prototype.wrap = function (pos) {

    var newPos_x = (pos[0] + Game.DIM_X) % Game.DIM_X;
    var newPos_y = (pos[1] + Game.DIM_Y) % Game.DIM_Y;
    return [newPos_x, newPos_y];
  };

  Game.prototype.checkCollisions = function () {
    var objects = this.allObjects();
    for (var i = 0; i < objects.length-1; i++){
      for (var j = i+1; j < objects.length; j++) {
        if ( objects[i].isCollidedWith(objects[j]) ) {
          objects[i].collideWith(objects[j]);
        };
      }
    }
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function (asteroidOne, asteroidTwo) {
    this.asteroids = this.asteroids.filter( function(obj) {
      return [asteroidOne, asteroidTwo].indexOf(obj) === -1;
    });
  };

})();
