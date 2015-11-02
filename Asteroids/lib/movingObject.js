(function() {
  if (typeof(window.Asteroids) === "undefined") {
    window.Asteroids = {};
  };


  var MovingObject = window.Asteroids.MovingObject = function (constructorVars) {
    this.pos = constructorVars.pos;
    this.vel = constructorVars.vel;
    this.radius = constructorVars.radius;
    this.color = constructorVars.color;
  };

  MovingObject.prototype.move = function () {
    this.pos[0] = this.pos[0] + this.vel[0];
    this.pos[1] = this.pos[1] + this.vel[1];

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

  MovingObject.prototype.test = function (canvasEl) {
    var ctx = canvasEl.getContext("2d");
    this.draw(ctx);
  };

})();
