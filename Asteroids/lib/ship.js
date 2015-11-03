(function () {
  if (typeof(window).Asteroids === "undefined") {
    window.Asteroids = {};
  };


  var Ship = Asteroids.Ship = function(game, pos) {
    this.vel = [0, 0];
    this.radius = Ship.RADIUS;
    this.color = Ship.COLOR;
    this.pos = pos;
    this.game = game;
  };

  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

  Ship.RADIUS = 10;
  Ship.COLOR = "black";

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
  };

  Ship.prototype.power = function(impulse) {
    this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];
    console.log(this.vel);
  }

})();
