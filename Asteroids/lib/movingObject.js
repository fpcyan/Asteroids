(function() {
  if (typeof(window.Asteroids) === "undefined") {
    window.Asteroids = {};
  };


  var MovingObject = Asteroids.MovingObject = function (constructorVars) {
    this.pos = constructorVars.pos;
    this.vel = constructorVars.vel;
    this.radius = constructorVars.radius;
    this.color = constructorVars.color;
    this.game = constructorVars.game;
  };

  MovingObject.prototype.move = function () {

    var pos_x = this.pos[0] + this.vel[0];
    var pos_y = this.pos[1] + this.vel[1];
    this.pos = this.game.wrap([pos_x, pos_y]);
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.isCollidedWith = function (otherObj) {
      if ( Asteroids.Util.dist(this.pos, otherObj.pos) <= (this.radius + otherObj.radius) ) {
        return true;
      } else {
        return false;
      };
  };

  MovingObject.prototype.collideWith = function (otherObj) {
    if (otherObj instanceof Asteroids.Ship) {
      otherObj.relocate();
      otherObj.vel = [0, 0];
    }
  };


})();
