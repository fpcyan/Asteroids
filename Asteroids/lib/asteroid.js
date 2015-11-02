(function () {
  if (typeof(window.Asteroids) === "undefined"){
    window.Asteroids = {};
  };

  Asteroids.Util.inherits(Asteroid, MovingObject);

  var Asteroid = function (pos) {
    this.vel = [Math.floor(Math.random() * 2), Math.floor(Math.rand() * 2)]
    MovingObject.call(this, { pos: pos, vel: this.vel, color: Asteroid.COLOR, radius: Asteroid.RADIUS })
  };

  Asteroid.COLOR = "blue";
  Asteroid.RADIUS = 30;

})();
