"require strict";

Function.prototype.curry = function (numArgs) {
  var fn = this;
  var argsArr = [];

  return function () {
    if (typeof(arguments) !== "undefined"){
      argsArr.push(arguments[0]);
    };

    if (argsArr.length === numArgs) {
      return fn.apply(fn, argsArr);
    };

  };
};


var printEverything = function (thing) {
  var finalString = ""
  for (var i = 0; i < arguments.length; i++) {
    finalString += arguments[i];
  };
  return finalString;
}


var printOut = printEverything.curry(3);
