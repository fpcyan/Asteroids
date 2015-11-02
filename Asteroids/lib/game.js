(function () {
  if (typeof(window.Asteroids) === "undefined") {
    window.Asteroids = {};
  };


  Game.DIM_X = 600
  Game.DIM_Y = 600
  Game.NUM_ASTEROIDS = 5

  var Game = function() {
    this.asteroids = [];
    this.addAsteroids();
  };

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      pos = [ Math.floor(Math.random() * Game.DIM_X), Math.floor(Math.random() * Game.DIM_Y)];

      var asteroid = new Asteroid(pos);
      asteroids.push(asteroid);
    }
  }

})();
