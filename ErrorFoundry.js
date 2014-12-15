(function (root, factory) {

  function ErrorFoundry() {}

  if (typeof define === 'function' && define.amd) {
    define(function () {
      return (root.ErrorFoundry = factory(ErrorFoundry));
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(ErrorFoundry);
  } else {
    root.ErrorFoundry = factory(ErrorFoundry);
  }
}(this, function (ErrorFoundry) {

  ErrorFoundry.forge = function (name) {
    /* jshint -W054 */
    return (new Function('name',
      'function '+name+'(message) {\n\n  this.message = message;\n  this.name = \''+name+'\';\n\n  Error.captureStackTrace(this, '+name+');\n}\n\n'+name+'.prototype = new Error();\n'+name+'.prototype.constructor = '+name+';\n\nreturn '+name+';'))(name);
  };

  return ErrorFoundry;
}));
