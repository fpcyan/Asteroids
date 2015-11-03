(function () {
  if (typeof(window.Asteroids) === "undefined") {
    window.Asteroids = {};
  };

  var Util = Asteroids.Util = {};

  Util.inherits = function (ChildClass, ParentClass) {
    var Surrogate = function () {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };


  Util.randomVec = function (length) {
    var vec = [0, 0];
      while (Util.norm(vec) < length - 1 || Util.norm(vec) > length + 1) {

        var vec_x = (Math.random() * length) * Util.plusOrMinus();
        var vec_y = (Math.random() * length) * Util.plusOrMinus();

        vec = [vec_x, vec_y];
      };
    return vec;
  };

  Util.plusOrMinus = function () {
    return Math.round(Math.random()) * 2 - 1
  }

  Util.dist = function (pos1, pos2) {
    if (pos1[0] === pos2[0] && pos1[1] === pos2[1]) {
      return 0;
    } else {

      var diffX = Math.pow( (pos2[0] - pos1[0]), 2); // square of difference
      var diffY = Math.pow( (pos2[1] - pos1[1]), 2);
      return Math.sqrt(diffX + diffY);
    };
  };

  Util.norm = function (vec) {
    return Util.dist([0, 0], vec);
  };

})();
